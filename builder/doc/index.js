import _ from 'lodash'
import fs from 'fs-extra'
import mustache from 'mustache'
import topTracker from '../../index.js'

const mustacheTemplate = {
    main: _.toString(fs.readFileSync('./builder/doc/template/main.md')),
    endpoint: _.toString(fs.readFileSync('./builder/doc/template/endpoint.md')),
}
const mustachePartials = {
    title: _.toString(fs.readFileSync('./builder/doc/template/_title.md')),
    sample: _.toString(fs.readFileSync('./builder/doc/template/_sample.md')),
    parameters: _.toString(fs.readFileSync('./builder/doc/template/_parameters.md')),
    input: _.toString(fs.readFileSync('./builder/doc/template/_input.md')),
    output: _.toString(fs.readFileSync('./builder/doc/template/_output.md')),
    install: _.toString(fs.readFileSync('./builder/doc/template/_install.md')),
    import: _.toString(fs.readFileSync('./builder/doc/template/_import.md')),
    methods: _.toString(fs.readFileSync('./builder/doc/template/_methods.md')),
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
        parameters: _.isEmpty(parameters) ? undefined : JSON.stringify(parameters, null, 4),
        input: _.isEmpty(value.INPUT) ? undefined : JSON.stringify(value.INPUT, null, 4),
        output: _.isEmpty(value.OUTPUT) ? undefined : JSON.stringify(value.OUTPUT, null, 4),
    }
}

const methods = _.reduce(
    topTracker,
    (methods, value, key) => {
        methods.push(initView(value, key))
        saveDocFile(`./docs/${key}/readme.md`, mustache.render(mustacheTemplate.endpoint, _.last(methods), mustachePartials))

        return methods
    },
    []
)

saveDocFile('./readme.md', mustache.render(mustacheTemplate.main, { methods, ..._.head(methods) }, mustachePartials))
