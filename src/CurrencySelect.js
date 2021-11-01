import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './CurrencySelect.css'

export default function CurrencySelect() {
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [options, setOptions] = useState([]);
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmount] = useState(1);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
    
    let toAmount;
    let fromAmount;

    if (amountInFromCurrency) {
        // setToAmount(amount*2)
        fromAmount = amount;
        toAmount = amount * exchangeRate;
    } else {
        // setFromAmount(amount / 2)
        toAmount = amount;
        fromAmount = amount / exchangeRate;
    }

    // console.log(options)
    useEffect(() => {
        Axios.get(
            "./rates.json")
            .then((res) => {
                const firstCurrency = Object.keys(res.data.merchant)[14];
                const secondCurrency = Object.keys(res.data.merchant)[28];
                setOptions(Object.keys(res.data.merchant));
                // console.log(Object.keys(res.data.eur)[0])
                setFromCurrency(firstCurrency);
                setToCurrency(secondCurrency);
                const euroKursai = res.data.merchant[firstCurrency]
                setExchangeRate(euroKursai["CAD"]);
            })
    }, []);

    function handleFromAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(true);
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(false);
    }



    return (

        <div className="select-row">
            <div className="pay-row">
                <label htmlFor="pay">Pay</label>
                <input type="text"
                    className="input"
                    id="pay"
                    value={fromAmount}
                    onChange={handleFromAmountChange}>
                </input>
                <div className="vertical"></div>
                <select value={fromCurrency} onChange={handleFromAmountChange}>
                    {options.map(option => (
                        <option value={option} key={option} >{option}</option>
                    ))}
                </select>
            </div>
            <div className="buy-row">
                <label htmlFor="buy">Buy</label><span></span>
                <input type="text" 
                className="input" 
                id="buy" 
                value={toAmount}
                onChange={handleFromAmountChange}>
                </input>
                <div className="vertical"></div>
                <select value={toCurrency} onChange={handleToAmountChange}>
                    {options.map(option => (
                        <option value={option} key={option} >{option}</option>
                    ))}
                </select>
            </div>
        </div>

    )
}