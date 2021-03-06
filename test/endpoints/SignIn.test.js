import _ from 'lodash'
import { SignIn } from '../../index.js'

beforeAll(() => {
    return MEMO.writable(new SignIn())
        .call({
            email: process.env.TEST_EMAIL,
            password: process.env.TEST_PASSWORD,
        })
        .then((session) => {
            MEMO.set(session)
        })
})

test('output match', () => {
    expect(SignIn.outputMatch(MEMO.get())).toBe(true)
})

afterAll(() => {
    MEMO.save()
})
