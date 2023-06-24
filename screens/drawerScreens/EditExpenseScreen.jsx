import { FlatList, View, Text, StyleSheet, TextInput } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { useState } from 'react';

import { editExpense, removeExpense } from '../../store/expensesSlice';

import MyButton from '../../components/UI/MyButton';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function EditExpenseScreen({ route, navigation }) {
  const dispatch = useDispatch();

  const {
    params: { id: expenseId },
  } = route;

  //   const elementToEdit = useSelector((state) => state.expensesSlice).filter(
  //     (item) => item.id === expenseId
  //   )[0];
  const elementToEdit = useSelector((state) => state.expensesSlice).filter(
    (item) => item.id === expenseId
  )[0];

  const [pickedDate, setPickedDate] = useState(
    new Date(elementToEdit?.date) || new Date()
  );
  const [titleInput, setTitleInput] = useState(elementToEdit?.title || '');
  const [cost, setCost] = useState(elementToEdit?.amount || '');

  const setDate = (event, date) => {
    // const {
    //   type,
    //   nativeEvent: { timestamp },
    // } = event;

    setPickedDate(new Date(date));
  };

  const updateButtonHandler = () => {
    if (titleInput.trim().length === 0) {
      return;
    }
    if (cost.trim().length === 0) {
      return;
    }
    dispatch(
      editExpense({
        id: expenseId,
        title: titleInput,
        date: pickedDate.getTime(),
        amount: cost,
      })
    );
    setPickedDate(new Date());
    setTitleInput('');
    setCost('');
    navigation.goBack();
  };

  const cancelButtonHandler = () => {
    navigation.goBack();
  };

  const removeButtonHandler = () => {
    dispatch(removeExpense(expenseId));
    navigation.goBack();
    // navigation.navigate("AllExpenses");
  };

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Text>Provide spend title EditExpense</Text>
        <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
          <TextInput
            placeholder="введіть назву витрати"
            style={{ textAlign: 'left', width: '100%', height: 30 }}
            value={titleInput}
            onChangeText={(txt) => setTitleInput(txt)}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Text>Provide amount spend</Text>
        <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
          <TextInput
            placeholder="введіть суму витрати"
            style={{ textAlign: 'left', width: '100%', height: 30 }}
            keyboardType="numeric"
            value={cost}
            onChangeText={(txt) => setCost(txt)}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Text>Select spend date</Text>
        <DateTimePicker value={pickedDate} onChange={setDate} />
      </View>
      <View style={styles.btnsContainer}>
        <MyButton onPress={cancelButtonHandler} txt={'Cancel'} clr={'blue'} />
        <MyButton
          onPress={updateButtonHandler}
          txt={'Update'}
          clr={'#3e09ba'}
        />
        <MyButton
          onPress={removeButtonHandler}
          txt={'Delete'}
          clr={'#3e09ba'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
