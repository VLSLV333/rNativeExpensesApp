import { Text, View, Pressable, StyleSheet } from "react-native";

export default function MyButton({ txt, clr, onPress }) {
  return (
    // <View style={[styles.rootContainer, { backgroundColor: clr }]}>
    <Pressable
      style={({ pressed }) => {
        return pressed
          ? [
              styles.rootContainer,
              { backgroundColor: clr },
              { backgroundColor: "#7640f5" },
            ]
          : [styles.rootContainer, { backgroundColor: clr }];
      }}
      android_ripple={"#7640f5"}
      onPress={onPress}
    >
      <View>
        <Text style={styles.btnText}>{txt}</Text>
      </View>
    </Pressable>
    // </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 7,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 2 },
    shadowRadius: 7,
    shadowOpacity: 0.8,
    padding: 12,
    width: "30%",
  },
  btnText: {
    color: "white",
  },
});
