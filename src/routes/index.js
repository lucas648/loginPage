import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import Welcome from '../pages/Welcome';
import SignIn from "../pages/SingIn";
import Home from "../pages/Home/Home";

const Stack = createNativeStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
