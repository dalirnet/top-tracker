import _ from 'lodash'
import fs from 'fs-extra'
import mustache from 'mustache'
import topTracker from '../../index.js'

const mustacheTemplate = {
    main: _.toString(fs.readFileSync('./builder/docs/template/main.md')),
    endpoint: _.toString(fs.readFileSync('./builder/docs/template/endpoint.md')),
}
const mustachePartials = {
    title: _.toString(fs.readFileSync('./builder/docs/template/_title.md')),
    sample: _.toString(fs.readFileSync('./builder/docs/template/_sample.md')),
    parameters: _.toString(fs.readFileSync('./builder/docs/template/_parameters.md')),
    input: _.toString(fs.readFileSync('./builder/docs/template/_input.md')),
    output: _.toString(fs.readFileSync('./builder/docs/template/_output.md')),
    install: _.toString(fs.readFileSync('./builder/docs/template/_install.md')),
    import: _.toString(fs.readFileSync('./builder/docs/template/_import.md')),
    endpoints: _.toString(fs.readFileSync('./builder/docs/template/_endpoints.md')),
}

const saveDocFile = (path, context) => {
    fs.ensureFileSync(path)
    fs.writeFileSync(path, _.replace(context, /[\r\n]{3,}/g, '\n\n'))
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
            ..._.find(endpoints, ['class', 'GetCountries']),
        },
        mustachePartials
    )
)
