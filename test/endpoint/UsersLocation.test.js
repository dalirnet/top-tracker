import _ from 'lodash'
import { UsersLocation } from '../../index.js'

beforeAll(() => {
    return MEMO.req(new UsersLocation())
        .call()
        .then((locations) => {
            MEMO.set(locations)
        })
})

test('output match', () => {
    expect(UsersLocation.outputMatch(MEMO.get())).toBeTruthy()
})

afterAll(() => {
    MEMO.save()
})
