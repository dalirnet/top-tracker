import _ from 'lodash'
import TopTracker from '../../index.js'

describe('GetCurrencies', () => {
    test('First currency name is "US Dollar"', () => {
        return new TopTracker.GetCurrencies().call().then((currencies) => {
            const firstCurrency = _.get(_.find(currencies, ['id', 1]), 'name')
            expect(firstCurrency).toBe('US Dollar')
        })
    })
})
