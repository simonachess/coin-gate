import React from 'react';
import './CurrencyForm.css';
import CurrencySelect from './CurrencySelect.js';
import PaymentSelect from './PaymentSelect.js'



export default function currencyForm() {

    return (
        <div className="container-background">
            <div className="select-container">
                <CurrencySelect />
                <div><p>Payment method</p>
                <PaymentSelect /></div>
                <div className="btn-container">
                    <button type="submit" id="submit-btn" disabled>Buy BTC</button>
                </div>
            </div>
        </div>
    )
}


