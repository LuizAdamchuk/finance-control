import React, {
  createContext,
  useReducer,
  useCallback,
  useEffect,
} from 'react';

import { AppReducer } from './AppReducer';

const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem('@Control-Finance:incomeTransactions')) ||
    [],
  expenseTransactions:
    JSON.parse(localStorage.getItem('@Control-Finance:expenseTransactions')) ||
    [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      '@Control-Finance:incomeTransactions',
      JSON.stringify(state.incomeTransactions),
    );
    localStorage.setItem(
      '@Control-Finance:expenseTransactions',
      JSON.stringify(state.expenseTransactions),
    );
  }, [state.expenseTransactions, state.incomeTransactions]);

  const addIncome = useCallback(incomeTransaction => {
    dispatch({
      type: 'ADD_INCOME',
      payload: incomeTransaction,
    });
  }, []);

  const addExpense = useCallback(expenseTransaction => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expenseTransaction,
    });
  }, []);

  const deleteTransaction = useCallback(id => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
