import _ from 'lodash'
import { Countries } from '../../index.js'

beforeAll(() => {
    return MEMO.writable(new Countries())
        .call()
        .then((countries) => {
            MEMO.set(countries)
        })
})

test('output match', () => {
    expect(Countries.outputMatch(MEMO.get())).toBe(true)
})

afterAll(() => {
    MEMO.save()
})
