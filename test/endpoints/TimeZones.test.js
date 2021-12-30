import _ from 'lodash'
import { TimeZones } from '../../index.js'

beforeAll(() => {
    return MEMO.writable(new TimeZones())
        .call()
        .then((timeZones) => {
            MEMO.set(timeZones)
        })
})

test('output match', () => {
    expect(TimeZones.outputMatch(MEMO.get())).toBeTruthy()
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
