import _ from 'lodash'
import casual from 'casual'
import { SignUp } from '../../index.js'

beforeAll(() => {
    return MEMO.req(new SignUp())
        .call({
            first_name: casual.first_name,
            last_name: casual.last_name,
            country_id: 228,
            city: casual.city,
            email: casual.email,
            password: process.env.TEST_PASSWORD,
        })
        .then((session) => {
            MEMO.set(session)
        })
        .catch((payload) => {
            console.log(payload)
        })
})

test('output match', () => {
    expect(SignUp.outputMatch(MEMO.get())).toBeTruthy()
})

afterAll(() => {
    MEMO.save()
})
