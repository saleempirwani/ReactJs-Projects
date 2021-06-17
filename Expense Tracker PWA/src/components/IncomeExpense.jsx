import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpense = () => {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    return (

        <div className="row m-0">
            <div className="col-12 col-md-6 col-sm-12 my-2">
                <div className="bg-success text-white p-3 rounded">
                    <h4>Income</h4>
                    <h5 className="mt-3">+ ${income}</h5>
                </div>
            </div>
            <div className="col-12 col-md-6  col-sm-12  my-2">
                <div className="bg-danger text-white p-3 rounded">
                    <h4>Expense</h4>
                    <h5 className="mt-3">- ${expense}</h5>
                </div>
            </div>
        </div>
    )
}