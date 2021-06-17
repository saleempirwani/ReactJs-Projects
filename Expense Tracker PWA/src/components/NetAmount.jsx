import React from 'react'
import {Balance} from "./Balance";
import {IncomeExpense} from "./IncomeExpense";

function NetAmount() {
    return (
        <div className="row m-0 my-3">
          <div className="col-12 col-md-4 col-sm-12 my-2">
            <Balance />
          </div>
          <div className="col-12 col-md-8 col-sm-12 p-0">
            <IncomeExpense />
          </div>
        </div>
        
    )
}

export default NetAmount
