import _ from 'lodash'
import TopTracker from '../../index.js'

describe('GetCountries', () => {
    let output = null
    beforeAll(() => {
        return new TopTracker.GetCountries().call().then((countries) => {
            output = countries
        })
    })
    test('typeof output', () => {
        expect(TopTracker.GetCountries.outputType(output)).toBeTruthy()
    })
    // test('first country name', () => {
    //     const firstCountry = _.get(_.find(output, ['id', 1]), 'name')
    //     expect(firstCountry).toBe('Afghanistan')
    // })
})
