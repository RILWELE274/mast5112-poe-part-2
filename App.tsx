// App.tsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuScreen from './screens/AddMenuScreen';
import MenuDetailsScreen from './screens/MenuDetailsScreen';
import AboutScreen from './screens/AboutScreen';
import type { MenuItem } from './types';

export type RootStackParamList = {
  Home: undefined;
  AddMenu: undefined;
  MenuDetails: { item: MenuItem };
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
        <Stack.Screen name="AddMenu">
          {props => <AddMenuScreen {...props} addMenuItem={(item) => setMenuItems([...menuItems, item])} />}
        </Stack.Screen>
        <Stack.Screen name="MenuDetails" component={MenuDetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
