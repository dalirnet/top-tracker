import _ from 'lodash'
import topTracker from '../../index.js'

beforeAll(() => {
    return MEMO.req(new topTracker.GetCountries())
        .call()
        .then((countries) => {
            MEMO.set(countries)
        })
})

test('output match', () => {
    expect(topTracker.GetCountries.outputMatch(MEMO.get())).toBeTruthy()
})

test('first country', () => {
    const firstCountry = _.find(MEMO.get(), ['id', 1])
    expect(firstCountry).toMatchObject({ id: 1, name: 'Afghanistan' })
})

afterAll(() => {
    MEMO.save()
})
