import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import DrawerNavigation from './navigation/drawer_Nav';


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  );
}

