import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import { IncomeTransactions } from '../IncomeTransactions';

export const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-income">
      <h2>Histórico de transações</h2>
      <ul className="transaction-list">
        {incomeTransactions.map(transaction => (
          <IncomeTransactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
