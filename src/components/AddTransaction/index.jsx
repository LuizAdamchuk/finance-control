import React, { useState, useCallback, useContext } from 'react';
import { uuid } from 'uuidv4';

import { GlobalContext } from '../../context/GlobalState';

export const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const handleIncomeChange = useCallback(
    e => {
      setIncome({ ...income, [e.target.name]: e.target.value });
      console.log(income);
    },
    [income],
  );
  const handleIncomeSubmit = useCallback(
    e => {
      e.preventDefault();

      if (incomeText !== '' && incomeAmount !== 0 && incomeAmount < 10000000) {
        const newIncomeTransaction = {
          id: uuid(),
          incomeText,
          incomeAmount: incomeAmount * 1,
        };

        addIncome(newIncomeTransaction);

        setIncome({
          incomeText: '',
          incomeAmount: 0,
        });
      }
    },
    [addIncome, incomeAmount, incomeText],
  );

  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const handleExpenseChange = useCallback(
    e => {
      setExpense({ ...expense, [e.target.name]: e.target.value });
    },
    [expense],
  );
  const handleExpenseSubmit = useCallback(
    e => {
      e.preventDefault();

      if (
        expenseText !== '' &&
        expenseAmount !== 0 &&
        expenseAmount < 10000000
      ) {
        const newExpenseTransaction = {
          id: uuid(),
          expenseText,
          expenseAmount: expenseAmount * 1,
        };

        addExpense(newExpenseTransaction);

        setExpense({
          expenseText: '',
          expenseAmount: 0,
        });
      }
    },
    [addExpense, expenseAmount, expenseText],
  );

  return (
    <div className="form-wrapper">
      <form onSubmit={handleIncomeSubmit}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            value={incomeText}
            className="text"
            placeholder="Detalhes"
            autoComplete="off"
            onChange={handleIncomeChange}
            required
          />
          <input
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            className="text"
            placeholder="Valor"
            autoComplete="off"
            onChange={handleIncomeChange}
            required
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={handleExpenseSubmit}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            value={expenseText}
            className="text"
            placeholder="Detalhes"
            autoComplete="off"
            onChange={handleExpenseChange}
            required
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            className="text"
            placeholder="Valor"
            autoComplete="off"
            onChange={handleExpenseChange}
            required
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
