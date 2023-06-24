import { FlatList, View, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import ExpensesItem from '../../components/UI/ExpensesItem';

export default function RecentExpensesScreen() {
  const today = new Date().getDate();
  const weekAgo = today - 7;

  const recentExpensesArr = useSelector((state) => state.expensesSlice).filter(
    (expense) => new Date(expense.date).getDate() >= weekAgo
  );

  if (recentExpensesArr.length === 0) {
    return <Text>There are no RecentExpenses :(</Text>;
  }

  function renderExpenseItem({ item }) {
    return (
      <ExpensesItem
        exp={item.amount}
        title={item.title}
        date={item.date}
        id={item.id}
        where={'EditExpensesStackRecent'}
      />
    );
  }

  return <FlatList data={recentExpensesArr} renderItem={renderExpenseItem} />;
}

const styles = StyleSheet.create({});
