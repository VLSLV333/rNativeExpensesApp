import { useState } from "react";

import { useDispatch } from "react-redux";
import { addExpense } from "../../store/expensesSlice";

import MyButton from "../../components/UI/MyButton";

import { View, Text, StyleSheet, TextInput } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddExpenseScreen({ navigation }) {
  const dispatch = useDispatch();

  const [pickedDate, setPickedDate] = useState(new Date());
  const [titleInput, setTitleInput] = useState("");
  const [cost, setCost] = useState("");

  const setDate = (event, date) => {
    // const {
    //   type,
    //   nativeEvent: { timestamp },
    // } = event;

    setPickedDate(new Date(date));
  };

  const addButtonHandler = () => {
    if (titleInput.trim().length === 0) {
      return;
    }
    if (cost.trim().length === 0) {
      return;
    }
    dispatch(
      addExpense({
        id: Math.random(),
        title: titleInput,
        date: pickedDate.getTime(),
        amount: cost,
      })
    );
    setPickedDate(new Date());
    setTitleInput("");
    setCost("");
    navigation.goBack();
  };

  const cancelButtonHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text>Provide spend title</Text>
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <TextInput
            placeholder="введіть назву витрати"
            style={{ textAlign: "left", width: "100%", height: 30 }}
            value={titleInput}
            onChangeText={(txt) => setTitleInput(txt)}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text>Provide amount spend</Text>
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <TextInput
            placeholder="введіть суму витрати"
            style={{ textAlign: "left", width: "100%", height: 30 }}
            keyboardType="numeric"
            value={cost}
            onChangeText={(txt) => setCost(txt)}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text>Select spend date</Text>
        <DateTimePicker value={pickedDate} onChange={setDate} />
      </View>
      <View style={styles.btnsContainer}>
        <MyButton onPress={cancelButtonHandler} txt={"Cancel"} clr={"blue"} />
        <MyButton onPress={addButtonHandler} txt={"Add"} clr={"#3e09ba"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
