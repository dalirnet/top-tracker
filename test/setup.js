import _ from 'lodash'
import fs from 'fs-extra'
import dotenv from 'dotenv'

dotenv.config()

const memo = {
    method: undefined,
    endpoint: undefined,
    output: undefined,
}

const endpointPath = (method, endpoint) => {
    return `./test/.memo/${_.toLower(method)}/${_.trim(endpoint, '/')}.memo.json`
}

const readable = (method, endpoint, fallback) => {
    if (fs.pathExistsSync(endpointPath(method, endpoint))) {
        return fs.readJSONSync(endpointPath(method, endpoint))
    }

    return fallback
}

const writable = (req) => {
    memo.method = req.method
    memo.endpoint = req.constructor.ENDPOINT

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
        fs.ensureFile(endpointPath(memo.method, memo.endpoint))
            .then(() => {
                return fs.writeJson(endpointPath(memo.method, memo.endpoint), memo.output, { spaces: 4 })
            })
            .catch(({ message }) => {
                console.log(message)
            })
    }
}

global.MEMO = { readable, writable, set, save, get }
