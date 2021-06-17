import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {

    const { transactions } = useContext(GlobalContext)
    let total = 0
    
    if (transactions.length !== 0) {
        const amount = transactions.map((transaction) => transaction.amount)
        total = amount.reduce((acc, item) => (acc += item)).toFixed(2)
    }

    return (
        <div className="bg-info text-white p-3 rounded">
            <h4>Your Balance</h4>
            <h5 className="mt-3">${total}</h5>

        </div>
    )
}