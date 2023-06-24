import { useNavigation } from "@react-navigation/native";

import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function OpenAddScreenButton({ color, size, where }) {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate(where);
  };

  return (
    <Pressable onPress={pressHandler}>
      <Ionicons name="add" size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
