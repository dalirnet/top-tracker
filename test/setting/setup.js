import fs from 'fs-extra'

const memo = {
    method: undefined,
    endpoint: undefined,
    output: undefined,
}

const path = () => {
    return `./test/memo/${memo.endpoint}.memo.json`
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
    fs.ensureFile(path()).then(() => {
        fs.writeJson(path(), memo.output).catch(({ message }) => {
            console.log(message)
        })
    })
}

global.MEMO = { req, set, save, get }
