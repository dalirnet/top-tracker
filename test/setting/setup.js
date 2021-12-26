import _ from 'lodash'
import fs from 'fs-extra'
import dotenv from 'dotenv'

dotenv.config()

const memo = {
    method: undefined,
    endpoint: undefined,
    output: undefined,
}

const endpointPath = (endpoint) => {
    return `./test/memo/${_.trim(endpoint, '/')}.memo.json`
}

const init = (endpoint, fallback) => {
    if (fs.pathExistsSync(endpointPath(endpoint))) {
        return fs.readJSONSync(endpointPath(endpoint))
    }

    return fallback
}

const req = (req) => {
    memo.method = req.method
    memo.endpoint = req.endpoint

    return req
}

const set = (output) => {
    memo.output = output
}

const get = () => {
    return memo.output
}

const save = () => {
    if (memo.output) {
        fs.ensureFile(endpointPath(memo.endpoint))
            .then(() => {
                return fs.writeJson(endpointPath(memo.endpoint), memo.output, { spaces: 4 })
            })
            .catch(({ message }) => {
                console.log(message)
            })
    }
}

global.MEMO = { init, req, set, save, get }
