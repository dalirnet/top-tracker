import _ from 'lodash'
import { SignIn, Projects } from '../../index.js'

beforeAll(() => {
    const session = MEMO.readable(SignIn.METHOD, SignIn.ENDPOINT)
    return MEMO.writable(new Projects())
        .call({
            access_token: _.get(session, 'access_token'),
        })
        .then((output) => {
            MEMO.set(output)
        })
})

test('output match', () => {
    expect(Projects.outputMatch(MEMO.get())).toBe(true)
})

afterAll(() => {
    MEMO.save()
})
