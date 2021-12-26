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

test('country by id 1', () => {
    const country = _.find(MEMO.get(), ['id', 1])
    expect(country).toMatchObject({
        id: 1,
        name: 'Afghanistan',
    })
})

afterAll(() => {
    MEMO.save()
})
