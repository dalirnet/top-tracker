import _ from 'lodash'
import { Login } from '../../index.js'

beforeAll(() => {
    return MEMO.req(new Login())
        .call({
            email: process.env.TEST_EMAIL,
            password: process.env.TEST_PASSWORD,
        })
        .then((session) => {
            MEMO.set(session)
        })
})

test('output match', () => {
    expect(Login.outputMatch(MEMO.get())).toBeTruthy()
})

afterAll(() => {
    MEMO.save()
})
