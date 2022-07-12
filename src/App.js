import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const Stack =  createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

function App(){
  return(
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerTitleAlign:'center',
            headerStyle:{
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle:{
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{
              headerShown: false
            }}/>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
