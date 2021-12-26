import Api from '../lib/Api.js'

class InvoiceDetails extends Api {
    static TODO = true
    static METHOD = 'GET'
    static ENDPOINT = '/payments/invoices/details/:invoice_uuid'
    static DESC = 'Get invoice details'
}

export default InvoiceDetails
