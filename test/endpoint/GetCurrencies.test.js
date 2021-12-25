import _ from 'lodash'
import TopTracker from '../../index.js'

beforeAll(() => {
    return MEMO.req(new TopTracker.GetCurrencies())
        .call()
        .then((currencies) => {
            MEMO.set(currencies)
        })
})

test('typeof output', () => {
    expect(TopTracker.GetCurrencies.outputType(MEMO.get())).toBeTruthy()
})

test('first currency name', () => {
    const firstCurrency = _.get(_.find(MEMO.get(), ['id', 1]), 'name')
    expect(firstCurrency).toBe('US Dollar')
})

afterAll(() => {
    MEMO.save()
})
