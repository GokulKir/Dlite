import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Screens/Intro/SplashScreen';
import Lg from './Screens/Ls/Lg';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Signup from './Screens/Ls/Signup';
import Dl from './Screens/Ls/Dl';
import Login from './Screens/Ls/Login';

const Stack = createStackNavigator();


const SL = () => {
  return (


    <Stack.Navigator

      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 500,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 500,
            },
          },
        },
      }}

    >
      <Stack.Screen name="SplashScreen" component={SplashScreen}  />
      <Stack.Screen name="Lg" component={Lg} />
      <Stack.Screen name="DL" component={Dl} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator>

  )
}


export default function App() {
  return (
    <NavigationContainer>

      <SL />

    </NavigationContainer>

  );
}