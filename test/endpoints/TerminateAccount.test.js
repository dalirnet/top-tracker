import _ from 'lodash'
import { SignUp, TerminateAccount } from '../../index.js'

beforeAll(() => {
    const session = MEMO.readable(SignUp.METHOD, SignUp.ENDPOINT)
    return MEMO.writable(
        new TerminateAccount({
            id: _.get(session, 'user.id'),
        })
    )
        .call({
            access_token: _.get(session, 'access_token'),
        })
        .then((output) => {
            MEMO.set(output)
        })
})

test('output match', () => {
    expect(TerminateAccount.outputMatch(MEMO.get())).toBeTruthy()
})

afterAll(() => {
    MEMO.save()
})
