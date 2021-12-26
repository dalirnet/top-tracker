import _ from 'lodash'
import topTracker from '../../index.js'

beforeAll(() => {
    return MEMO.req(new topTracker.GetCurrencies())
        .call()
        .then((currencies) => {
            MEMO.set(currencies)
        })
})

test('output match', () => {
    expect(topTracker.GetCurrencies.outputMatch(MEMO.get())).toBeTruthy()
})

test('first currency', () => {
    const firstCurrency = _.find(MEMO.get(), ['id', 1])
    expect(firstCurrency).toMatchObject({ id: 1, name: 'US Dollar', code: 'USD', symbol: '$' })
})

afterAll(() => {
    MEMO.save()
})
