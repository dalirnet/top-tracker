// get
get('/countries')
get('/payments/currencies')
get('/time_zones')
get('/users/location')
get(`/invitations/${token}`)
get(`/payments/invoices/${token}/confirm`)
get(`/payments/invoices/details/${invoice_uuid}`)
get(`/payments/invoices/summary/${invoice_uuid}`)

// post
post('/sessions', {
    email: 'string',
    password: 'string',
    remember_me: 'boolean',
    profile: 'string',
})

post('/users', {
    first_name: 'string',
    last_name: 'string',
    country_id: 'number',
    city: 'string',
    email: 'string',
    password: 'string',
})

// signedDelete
signedDelete('/sessions/me')
signedDelete(`/activities/images/${id}`)
signedDelete(`/invitations/${invitation_id}`)
signedDelete(`/notifications/${id}`)
signedDelete(`/payments/invoices/${invoice_id}`)
signedDelete(`/projects/${id}`)
signedDelete(`/users/${id}`)

// signedGet
signedGet('/activities/my', {
    project_ids: '[any]',
    start_date: 'isodate',
    end_date: 'isodate',
})

signedGet('/invitations')
signedGet('/notifications')
signedGet('/payments/filters')

signedGet('/payments/invoice_engagements', {
    ids: '[any]',
    start_date: 'isodate',
    end_date: 'isodate',
    invoice_id: 'number',
})

signedGet('/payments/invoices', {
    project_ids: '[any]',
    worker_ids: '[any]',
    client_ids: '[any]',
    statuses: '[canceled|chargebacked|declined|draft|paid|paid_and_confirmed|refunded|pending|overdue|processing|unmarked_as_paid]',
    sortBy: 'creation-date|due-date|member-name|most-tracked|project-name|recently-tracked|start-time|status|team-size|total|type',
    SortOrder: 'asc|desc',
    start_date: 'isodate',
    end_date: 'isodate',
})

signedGet('/payments/providers')

signedGet('/projects', {
    q: 'string',
})

signedGet('/projects/list', {
    project_ids: '[any]',
    archived: 'boolean',
})

signedGet('/reports/activities', {
    project_ids: '[any]',
    worker_ids: '[any]',
    start_date: 'isodate',
    end_date: 'isodate',
    type: 'workers|activities|projects',
})

signedGet('/reports/chart', {
    project_ids: '[any]',
    worker_ids: '[any]',
    start_date: 'isodate',
    end_date: 'isodate',
    type: 'workers|activities|projects',
})

signedGet('/reports/filters', {
    selected_project_ids: '[any]',
})

signedGet('/reports/timesheet', {
    project_ids: '[any]',
    worker_ids: '[any]',
    start_date: 'isodate',
    end_date: 'isodate',
    type: 'workers|activities|projects',
})

signedGet('/reports/work_summary', {
    project_ids: '[any]',
    worker_ids: '[any]',
    start_date: 'isodate',
    end_date: 'isodate',
    type: 'workers|activities|projects',
})

signedGet('/users/me/storages/tracker_web')

signedGet('/web/projects_lite', {
    archived: 'boolean',
})

signedGet('/web/projects', {
    archived: 'boolean',
})

signedGet('/web/web_tracker')
signedGet(`/activities/${id}`)
signedGet(`/payments/invoices/${invoice_id}`)
signedGet(`/projects/${id}`)
signedGet(`/projects/${project_id}/engagements`)
signedGet(`/projects/${project_id}/statistics`)
signedGet(`/users/${id}`)
signedGet(`/web/projects/${id}`)

// signedPost
signedPost('/activities/delete', {
    activity_ids: '[number]',
})

signedPost('/activities/update', {
    activity_ids: '[number]',
    project_id: 'number',
    description: 'string',
    start_time: 'string',
    end_time: 'string',
    date: 'string',
    offline_type: 'number',
})

signedPost('/payments/invoices', {
    due_date: 'isodate',
    start_date: 'isodate',
    end_date: 'isodate',
    custom_id: 'string',
    sender_name: 'string',
    sender_email: 'string',
})

signedPost('/payments/providers/link', {
    vendor: 'payoneer',
})

signedPost('/payments/providers/unlink', {
    vendor: 'payoneer',
})

signedPost('/projects', {
    name: 'string',
    add_me: 'boolean',
})

signedPost('/sessions/switch')
signedPost('/users/me/profiles')
signedPost(`/activities/${id}/approve`)
signedPost(`/activities/${id}/split`, {
    split_at: 'any',
})
signedPost(`/invitations/${invitation_id}/resend`)
signedPost(`/invitations/${token}/decline`)
signedPost(`/projects/${project_id}/activities`, {
    start_time: 'isodate',
})
signedPost(`/projects/${project_id}/invitations`, { invites: 'any' })

// signedPut
signedPut('/users/me/storages/tracker_web', { [key]: value })
signedPut(`/invitations/${token}`)
signedPut(`/notifications/${id}/mark_as_read`)
signedPut(`/payments/invoices/${invoice_id}/cancel`)
signedPut(`/payments/invoices/${invoice_id}/decline`)
signedPut(`/payments/invoices/${invoice_id}/mark_as_paid`)
signedPut(`/payments/invoices/${invoice_id}/send`, { reminder: 'any' })
signedPut(`/payments/invoices/${invoice_id}/unmark_as_paid`)
signedPut(`/payments/invoices/${payload.id}`, {})
signedPut(`/projects/${id}/archive`)
signedPut(`/projects/${id}/dearchive`)
signedPut(`/projects/${id}`, { name: 'atring' })
signedPut(`/projects/${project_id}/workers`, {})
signedPut(`/users/${id}`, {})
