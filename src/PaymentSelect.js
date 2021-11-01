import React from 'react';
import './PaymentSelect.css'

export default function PaymentSelect() {

    const payments = [`Bank transfer`, `Paypal`, `Master Card` ];

    return (

        <div className="payment-row">
            <select className="payment-select">
                {payments.map(payment => (
                    <option value={payment} key={payment}>{payment}</option>
                    ))}
            </select>
        </div>

    )
}