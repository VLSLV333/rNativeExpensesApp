import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  // {
  //   id: Math.random(),
  //   title: 'Bought PS5',
  //   date: new Date().getTime(),
  //   amount: '15',
  // },
];

const expensesSlice = createSlice({
  name: 'expensesSlice',
  initialState,
  reducers: {
    addExpense: (state, { payload }) => {
      state.push(payload);
    },
    removeExpense: (state, { payload }) => {
      const expenseToChange = state.find((expense) => expense.id === payload);
      state.splice(state.indexOf(expenseToChange), 1);
    },
    editExpense: (state, { payload }) => {
      const expenseToChange = state.find(
        (expense) => expense.id === payload.id
      );

      state.splice(state.indexOf(expenseToChange), 1);
      state.push(payload);
    },
  },
});

export const { addExpense, editExpense, removeExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
