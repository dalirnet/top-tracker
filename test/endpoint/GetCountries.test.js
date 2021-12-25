import _ from 'lodash'
import TopTracker from '../../index.js'

beforeAll(() => {
    return MEMO.req(new TopTracker.GetCountries())
        .call()
        .then((countries) => {
            MEMO.set(countries)
        })
})

test('output match', () => {
    expect(TopTracker.GetCountries.outputMatch(MEMO.get())).toBeTruthy()
})

test('first country', () => {
    const firstCountry = _.find(MEMO.get(), ['id', 1])
    expect(firstCountry).toMatchObject({ id: 1, name: 'Afghanistan' })
})

afterAll(() => {
    MEMO.save()
})
