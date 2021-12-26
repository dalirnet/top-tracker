import _ from 'lodash'
import fs from 'fs-extra'
import figures from 'figures'
import mustache from 'mustache'
import * as topTracker from '../../index.js'

const endpoint = _.toLower(_.trim(_.get(process.argv, 2)))
const endpoints = _.map(_.keys(topTracker), _.toLower)

if (!endpoint || _.includes(endpoints, endpoint)) {
    console.error(figures.cross, 'Invalid endpoint')
    process.exit(0)
}

const mustacheView = {
    endpoint,
    class: _.upperFirst(_.camelCase(endpoint)),
    method: _.toUpper(_.trim(_.get(process.argv, 4, 'GET'))),
}

const mustacheTemplate = {
    class: _.toString(fs.readFileSync('./builder/endpoint/template/class.js.mustache')),
    test: _.toString(fs.readFileSync('./builder/endpoint/template/test.js.mustache')),
    export: _.toString(fs.readFileSync('./builder/endpoint/template/export.js.mustache')),
}

const classPath = `./src/endpoints/${mustacheView.class}.js`
fs.appendFileSync(classPath, mustache.render(mustacheTemplate.class, mustacheView))
console.log(figures.tick, 'Build', classPath)

const testPath = `./test/endpoints/${mustacheView.class}.test.js`
fs.appendFileSync(testPath, mustache.render(mustacheTemplate.test, mustacheView))
console.log(figures.tick, 'Build', testPath)

const indexPath = './index.js'
fs.writeFileSync(
    indexPath,
    mustache.render(mustacheTemplate.export, {
        class: _.sortBy([..._.keys(topTracker), mustacheView.class], (value) => value),
    })
)
console.log(figures.tick, 'Build', indexPath)

console.log(figures.tick, 'Done')
