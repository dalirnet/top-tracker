import Api from '../lib/Api.js'

class InvoiceSummary extends Api {
    static TODO = true
    static METHOD = 'GET'
    static ENDPOINT = '/payments/invoices/summary/$invoice_uuid'
    static DESC = 'Get invoice summary'
}

export default InvoiceSummary
