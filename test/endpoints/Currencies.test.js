import _ from 'lodash'
import { Currencies } from '../../index.js'

beforeAll(() => {
    return MEMO.writable(new Currencies())
        .call()
        .then((currencies) => {
            MEMO.set(currencies)
        })
})

test('output match', () => {
    expect(Currencies.outputMatch(MEMO.get())).toBe(true)
})

afterAll(() => {
    MEMO.save()
})
