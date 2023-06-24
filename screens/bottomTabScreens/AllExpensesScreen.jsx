import { useSelector } from 'react-redux';

import { FlatList, View, Text, StyleSheet } from 'react-native';

import ExpensesItem from '../../components/UI/ExpensesItem';

export default function AllExpensesScreen() {
  const allExpensesArray = useSelector((state) => state.expensesSlice);

  if (allExpensesArray.length === 0) {
    return <Text>Please, create your first expense :)</Text>;
  }

  function renderListOfItems({ item }) {
    return (
      <ExpensesItem
        exp={item.amount}
        title={item.title}
        date={item.date}
        id={item.id}
        where={'EditExpensesStackAll'}
      />
    );
  }

  return (
    <FlatList
      data={allExpensesArray}
      // keyExtractor={(item) => item.id}
      renderItem={renderListOfItems}
    />
  );
}

const styles = StyleSheet.create({});
