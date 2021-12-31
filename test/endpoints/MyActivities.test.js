import _ from 'lodash'
import { SignIn, MyActivities } from '../../index.js'

beforeAll(() => {
    const session = MEMO.readable(SignIn.METHOD, SignIn.ENDPOINT)
    return MEMO.writable(new MyActivities())
        .call({
            access_token: _.get(session, 'access_token'),
        })
        .then((output) => {
            MEMO.set(output)
        })
        .catch(({ message, payload }) => {
            console.log(message, payload)
        })
})

test('output match', () => {
    expect(MyActivities.outputMatch(MEMO.get())).toBe(true)
})

afterAll(() => {
    MEMO.save()
})
