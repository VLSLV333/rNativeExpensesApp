import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import store from "./store/store";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";

import AllExpensesScreen from "./screens/bottomTabScreens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/bottomTabScreens/RecentExpensesScreen";

import EditExpenseScreen from "./screens/drawerScreens/EditExpenseScreen";
import AddExpenseScreen from "./screens/drawerScreens/AddExpenseScreen";

import OpenAddScreenButton from "./components/ScreenRelated/OpenAddScreenButton";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigatorRecent() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecentExpensesStack"
        component={RecentExpensesScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <OpenAddScreenButton size={24} color={tintColor} where="AddExpensesStackRecent"/>
          ),
          gestureDirection: "vertical",
        }}
      />
      <Stack.Screen name="AddExpensesStackRecent" component={AddExpenseScreen} />
      <Stack.Screen name="EditExpensesStackRecent" component={EditExpenseScreen} />
    </Stack.Navigator>
  );
}

function StackNavigatorAll() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllExpensesStack"
        component={AllExpensesScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <OpenAddScreenButton size={24} color={tintColor} where="AddExpensesStackAll" />
          ),
          gestureDirection: "vertical",
        }}
      />
      <Stack.Screen name="AddExpensesStackAll" component={AddExpenseScreen} />
      <Stack.Screen name="EditExpensesStackAll" component={EditExpenseScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <BottomTab.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#3e09ba" },
              headerTintColor: "white",
              tabBarActiveTintColor: "#e6a00b",
              tabBarStyle: { backgroundColor: "#3e09ba" },
              tabBarInactiveTintColor: "white",
            }}
          >
            <BottomTab.Screen
              name="RecentExpenses"
              component={StackNavigatorRecent}
              options={{
                title: "Recent",
                tabBarIcon: ({ color, size }) => {
                  return (
                    <MaterialCommunityIcons
                      color={color}
                      size={size}
                      name="timer-sand"
                    />
                  );
                },
              }}
            />
            <BottomTab.Screen
              name="AllExpenses"
              component={StackNavigatorAll}
              options={{
                title: "All Expenses",
                tabBarIcon: ({ color, size }) => {
                  return (
                    <Ionicons
                      color={color}
                      size={size}
                      name="calendar-outline"
                    />
                  );
                },
              }}
            />
          </BottomTab.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
