import _ from 'lodash'
import { GetCountries } from '../../index.js'

beforeAll(() => {
    return MEMO.req(new GetCountries())
        .call()
        .then((countries) => {
            MEMO.set(countries)
        })
})

test('output match', () => {
    expect(GetCountries.outputMatch(MEMO.get())).toBeTruthy()
})

test('first country', () => {
    const firstCountry = _.find(MEMO.get(), ['id', 1])
    expect(firstCountry).toMatchObject({ id: 1, name: 'Afghanistan' })
})

afterAll(() => {
    MEMO.save()
})
