import _ from 'lodash'
import { GetCurrencies } from '../../index.js'

beforeAll(() => {
    return MEMO.req(new GetCurrencies())
        .call()
        .then((currencies) => {
            MEMO.set(currencies)
        })
})

test('output match', () => {
    expect(GetCurrencies.outputMatch(MEMO.get())).toBeTruthy()
})

test('first currency', () => {
    const firstCurrency = _.find(MEMO.get(), ['id', 1])
    expect(firstCurrency).toMatchObject({ id: 1, name: 'US Dollar', code: 'USD', symbol: '$' })
})

afterAll(() => {
    MEMO.save()
})
