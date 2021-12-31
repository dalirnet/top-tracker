import _ from 'lodash'
import { SignIn, Projects, MyActivities } from '../../index.js'

beforeAll(() => {
    const session = MEMO.readable(SignIn.METHOD, SignIn.ENDPOINT)
    const project = MEMO.readable(Projects.METHOD, Projects.ENDPOINT)
    return MEMO.writable(new MyActivities())
        .call({
            access_token: _.get(session, 'access_token'),
            project_ids: _.get(project, 'projects.0.id'),
        })
        .then((output) => {
            MEMO.set(output)
        })
})

test('output match', () => {
    expect(MyActivities.outputMatch(MEMO.get())).toBe(true)
})

afterAll(() => {
    MEMO.save()
})
