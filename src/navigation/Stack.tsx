import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import {Image, View} from 'react-native';
import logo from '../assets/logo/logo.png';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true,
            headerTitle: HeaderTitle,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Bottom" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return (
    <View>
      <Image
        source={logo}
        resizeMode="contain"
        style={{width: 150, height: 40}}
      />
    </View>
  );
};

export default MyStack;
