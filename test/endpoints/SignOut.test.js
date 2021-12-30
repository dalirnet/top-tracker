import _ from 'lodash'
import { SignIn, SignOut } from '../../index.js'

beforeAll(() => {
    const session = MEMO.readable(SignIn.METHOD, SignIn.ENDPOINT)
    return MEMO.writable(new SignOut())
        .call({
            access_token: _.get(session, 'access_token'),
        })
        .then((signOut) => {
            MEMO.set(signOut)
        })
})

test('output match', () => {
    expect(SignOut.outputMatch(MEMO.get())).toBeTruthy()
})

afterAll(() => {
    MEMO.save()
})
