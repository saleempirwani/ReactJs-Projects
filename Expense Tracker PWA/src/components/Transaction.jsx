import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}:{" "}
      <span>
        {sign} ${Math.abs(transaction.amount)}
      </span>
      <span
        onClick={() => deleteTransaction(transaction.id)}
        className="text-danger delete-btn">
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  );
};
