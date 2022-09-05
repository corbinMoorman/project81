import *as React from 'react'
import {createDrawerNavigation} from "@react-navigation/drawer"
import Profile_Screen from '../screens/profile_Screen'
import BottomTabNavigator from './bottomTab_Nav'
const Drawer = createDrawerNavigation()

const DrawerNavigation = () => {
    return(
        <Drawer.Navigation>
            <Drawer.Screen name = "home" component = {BottomTabNavigator}/>
            <Drawer.Screen name = "profile" component = {Profile_Screen}/>
        </Drawer.Navigation>
    )
}


export default DrawerNavigation

