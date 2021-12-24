import _ from 'lodash'
import topTracker from '../index.js'

describe('GetCurrencies', () => {
    test('First currency name is "US Dollar"', () => {
        return new topTracker.GetCurrencies().call().then((currencies) => {
            const firstCurrency = _.get(_.find(currencies, ['id', 1]), 'name')
            expect(firstCurrency).toBe('US Dollar')
        })
    })
})
