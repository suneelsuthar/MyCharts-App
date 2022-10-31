import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home,
  AddReceipt,
  ConfirmReceipt,
  Options,
  AddChartData,
  SavedChart,
  ChartDetails,
} from "./../screens";
import theme from "../../theme";
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "List of registered receipts",
            headerStyle: {
              backgroundColor: theme.primary,
            },
            headerTintColor: theme.white,
            headerTitleStyle: {
              fontFamily: theme.medium,
            },
          }}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={{
            title: "Select Chart",
            headerStyle: {
              backgroundColor: theme.primary,
            },
            headerTintColor: theme.white,
            headerTitleStyle: {
              fontFamily: theme.medium,
            },
          }}
        />
        <Stack.Screen
          name="SavedChart"
          component={SavedChart}
          options={{
            title: "Saved Chart",
            headerStyle: {
              backgroundColor: theme.primary,
            },
            headerTintColor: theme.white,
            headerTitleStyle: {
              fontFamily: theme.medium,
            },
          }}
        />

        <Stack.Screen
          name="AddChartData"
          component={AddChartData}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ChartDetails"
          component={ChartDetails}
          options={{
            title: "Details",
            headerStyle: {
              backgroundColor: theme.primary,
            },
            headerTintColor: theme.white,
            headerTitleStyle: {
              fontFamily: theme.medium,
            },
          }}
        />

        {/* ChartDetails */}

        <Stack.Screen
          name="AddReceipt"
          component={AddReceipt}
          options={{
            title: "Add new receipt",
            headerStyle: {
              backgroundColor: theme.primary,
            },
            headerTintColor: theme.white,
            headerTitleStyle: {
              fontFamily: theme.medium,
            },
          }}
        />
        <Stack.Screen
          name="ConfirmReceipt"
          component={ConfirmReceipt}
          options={{
            title: "Confirm receipt",
            headerStyle: {
              backgroundColor: theme.primary,
            },
            headerTintColor: theme.white,
            headerTitleStyle: {
              fontFamily: theme.medium,
            },
          }}
        />
        {/*  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
