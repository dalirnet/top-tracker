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
    expect(TimeZones.outputMatch(MEMO.get())).toBe(true)
})

afterAll(() => {
    MEMO.save()
})
