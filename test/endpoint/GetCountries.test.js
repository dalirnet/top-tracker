import _ from 'lodash'
import TopTracker from '../../index.js'

beforeAll(() => {
    return MEMO.req(new TopTracker.GetCountries())
        .call()
        .then((countries) => {
            MEMO.set(countries)
        })
})

test('typeof output', () => {
    expect(TopTracker.GetCountries.outputType(MEMO.get())).toBeTruthy()
})

test('first country name', () => {
    const firstCountry = _.get(_.find(MEMO.get(), ['id', 1]), 'name')
    expect(firstCountry).toBe('Afghanistan')
})

afterAll(() => {
    MEMO.save()
})
