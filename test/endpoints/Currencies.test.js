import _ from 'lodash'
import { Currencies } from '../../index.js'

beforeAll(() => {
    return MEMO.req(new Currencies())
        .call()
        .then((currencies) => {
            MEMO.set(currencies)
        })
})

test('output match', () => {
    expect(Currencies.outputMatch(MEMO.get())).toBeTruthy()
})

test('currency by id 1', () => {
    const currency = _.find(MEMO.get(), ['id', 1])
    expect(currency).toMatchObject({
        id: 1,
        name: 'US Dollar',
        code: 'USD',
        symbol: '$',
    })
})

afterAll(() => {
    MEMO.save()
})
