import _ from 'lodash'
import fs from 'fs-extra'
import mustache from 'mustache'

const mustacheTemplate = {
    class: _.toString(fs.readFileSync('./builder/endpoint/template/class.md')),
    export: _.toString(fs.readFileSync('./builder/endpoint/template/export.md')),
    test: _.toString(fs.readFileSync('./builder/endpoint/template/test.md')),
}

const saveDocFile = (path, context) => {
    fs.ensureFileSync(path)
    fs.writeFileSync(path, context)
}

fs.emptyDirSync('./docs/')

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
