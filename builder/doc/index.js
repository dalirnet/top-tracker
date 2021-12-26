import _ from 'lodash'
import fs from 'fs-extra'
import mustache from 'mustache'
import topTracker from '../../index.js'

const mustacheTemplate = _.toString(fs.readFileSync('./builder/doc/mustache.md'))

_.each(topTracker, (value, key) => {
    // const instance = new topTracker[key]()
    const docFilePath = `./docs/${key}/readme.md`
    const parameters = _.mapValues(_.invert(value.extractEndpointParameters(value.ENDPOINT)), () => 'isString')
    const view = {
        title: _.startCase(key),
        class: key,
        endpoint: value.ENDPOINT,
        description: value.DESC,
        parameter: _.isEmpty(parameters) ? undefined : JSON.stringify(parameters, null, 4),
        input: _.isEmpty(value.INPUT) ? undefined : JSON.stringify(value.INPUT, null, 4),
        output: _.isEmpty(value.OUTPUT) ? undefined : JSON.stringify(value.OUTPUT, null, 4),
    }
    fs.ensureFileSync(docFilePath)
    fs.writeFileSync(docFilePath, mustache.render(mustacheTemplate, view))
})
