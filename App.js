import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen.';
import { Provider } from 'react-redux';
import store from './src/store';
import AddTransactions from './src/components/AddTransactions';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{
            title:"Expense"
          }}/>
          <Stack.Screen name="Add" component={AddTransactions} options={{
            title:"Add Expense"
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}