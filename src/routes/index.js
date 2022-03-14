import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import Welcome from '../pages/Welcome';
import SignIn from "../pages/SingIn";

const Stack = createNativeStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{}}
        />

        <Stack.Screen 
          name="SignIn"
          component={SignIn}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
