import _ from 'lodash'
import fs from 'fs-extra'
import figures from 'figures'
import mustache from 'mustache'
import * as topTracker from '../../index.js'

const mustacheTemplate = {
    main: _.toString(fs.readFileSync('./builder/docs/template/main.md.mustache')),
    endpoint: _.toString(fs.readFileSync('./builder/docs/template/endpoint.md.mustache')),
}

const mustachePartials = {
    title: _.toString(fs.readFileSync('./builder/docs/template/_title.md.mustache')),
    sample: _.toString(fs.readFileSync('./builder/docs/template/_sample.md.mustache')),
    parameters: _.toString(fs.readFileSync('./builder/docs/template/_parameters.md.mustache')),
    input: _.toString(fs.readFileSync('./builder/docs/template/_input.md.mustache')),
    output: _.toString(fs.readFileSync('./builder/docs/template/_output.md.mustache')),
    install: _.toString(fs.readFileSync('./builder/docs/template/_install.md.mustache')),
    import: _.toString(fs.readFileSync('./builder/docs/template/_import.md.mustache')),
    endpoints: _.toString(fs.readFileSync('./builder/docs/template/_endpoints.md.mustache')),
}

const saveDocFile = (path, context) => {
    fs.ensureFileSync(path)
    fs.writeFileSync(path, _.replace(context, /[\r\n]{3,}/g, '\n\n'))
    console.log(figures.tick, 'Build', path)
}

const initView = (value, key) => {
    const parameters = _.reduce(
        value.extractEndpointParameters(value.ENDPOINT),
        (parameters, value) => {
            return _.set(parameters, value, 'isString')
        },
        {}
    )

    return {
        class: key,
        title: _.startCase(key),
        description: value.DESC,
        todo: value.TODO,
        parameters: _.isEmpty(parameters) ? undefined : JSON.stringify(parameters, null, 4),
        input: _.isEmpty(value.INPUT) ? undefined : JSON.stringify(value.INPUT, null, 4),
        output: _.isEmpty(value.OUTPUT) ? undefined : JSON.stringify(value.OUTPUT, null, 4),
    }
}

fs.emptyDirSync('./docs/')

const endpoints = _.sortBy(
    _.reduce(
        topTracker,
        (endpoints, value, key) => {
            const view = initView(value, key)
            if (!view.todo) {
                saveDocFile(`./docs/${key}/readme.md`, mustache.render(mustacheTemplate.endpoint, view, mustachePartials))
            }
            endpoints.push(view)

            return endpoints
        },
        []
    ),
    (endpoint) => {
        return endpoint.class && endpoint.todo
    }
)

saveDocFile(
    './readme.md',
    mustache.render(
        mustacheTemplate.main,
        {
            endpoints,
            ..._.find(endpoints, ['class', 'SignIn']),
        },
        mustachePartials
    )
)

console.log(figures.tick, 'Done')
