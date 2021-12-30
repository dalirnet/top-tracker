import Api from '../lib/Api.js'

class InvoiceConfirm extends Api {
    static TODO = true
    static METHOD = 'GET'
    static ENDPOINT = '/payments/invoices/$token/confirm'
    static DESC = 'Confirm invoice'
}

export default InvoiceConfirm
