import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

export const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const totalIncomeAmount = incomeTransactions
    .map(transaction => transaction.incomeAmount)
    .reduce((acc, sum) => (acc += sum), 0)
    .toFixed(2);
  const totalExpenseAmount = expenseTransactions
    .map(transaction => transaction.expenseAmount)
    .reduce((acc, sum) => (acc += sum), 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h2>
        Total <br /> R${' '}
        {(totalIncomeAmount - totalExpenseAmount).toFixed(2).replace('.', ',')}
      </h2>
      <div className="income-expense">
        <div className="plus">
          <h3>Entradas</h3>
          <p>+R$ {totalIncomeAmount.replace('.', ',')}</p>
        </div>
        <div className="minus">
          <h3>Gastos</h3>
          <p>-R$ {totalExpenseAmount.replace('.', ',')}</p>
        </div>
      </div>
    </div>
  );
};
