import { useNavigation } from '@react-navigation/native';

import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function ExpensesItem({ exp, title, date, id, where }) {
  const navigation = useNavigation();

  const dd = String(new Date(date).getDate()).padStart(2, '0');
  const mm = String(new Date(date).getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = new Date(date).getFullYear();

  const today = yyyy + '-' + mm + '-' + dd;

  return (
    <Pressable
      style={styles.rootContainer}
      onPress={() => {
        navigation.navigate(where, { id });
      }}
    >
      <View>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDate}>{today}</Text>
      </View>
      <View style={styles.expenseContainer}>
        <Text style={styles.expenseText}>{exp}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3e09ba',
    padding: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textDate: {
    color: 'white',
    fontSize: 14,
  },
  expenseContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    width: 40,
    borderRadius: 7,
  },
  expenseText: {
    color: '#3e09ba',
  },
});
