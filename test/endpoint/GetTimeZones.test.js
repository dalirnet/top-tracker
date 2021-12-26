import _ from 'lodash'
import { GetTimeZones } from '../../index.js'

beforeAll(() => {
    return MEMO.req(new GetTimeZones())
        .call()
        .then((timeZones) => {
            MEMO.set(timeZones)
        })
})

test('output match', () => {
    expect(GetTimeZones.outputMatch(MEMO.get())).toBeTruthy()
})

test('timezone by value Pacific/Kiritimati', () => {
    const timezone = _.find(MEMO.get(), ['value', 'Pacific/Kiritimati'])
    expect(timezone).toMatchObject({
        value: 'Pacific/Kiritimati',
        label: '(+14:00) Pacific - Kiritimati',
    })
})

afterAll(() => {
    MEMO.save()
})