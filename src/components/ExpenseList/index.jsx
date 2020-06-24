import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import { ExpenseTransactions } from '../ExpenseTransactions';

export const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-expense">
      <h2>Histórico de transações</h2>
      <ul className="transaction-list">
        {expenseTransactions.map(transaction => (
          <ExpenseTransactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
