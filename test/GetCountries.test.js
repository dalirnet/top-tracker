import _ from 'lodash'
import topTracker from '../index.js'

describe('GetCountries', () => {
    test('First country name is "Afghanistan"', () => {
        return new topTracker.GetCountries().call().then((countries) => {
            const firstCountry = _.get(_.find(countries, ['id', 1]), 'name')
            expect(firstCountry).toBe('Afghanistan')
        })
    })
})
