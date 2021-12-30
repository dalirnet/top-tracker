import Api from '../lib/Api.js'

class RemoveInvoice extends Api {
    static TODO = true
    static METHOD = 'DELETE'
    static ENDPOINT = '/payments/invoices/$invoice_id'
    static DESC = 'Remove an invoice'
    static INPUT = {
        access_token: 'isString',
    }
}

export default RemoveInvoice
