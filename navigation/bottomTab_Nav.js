import *as React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import IonIcons from "@react-native-vector-ions/Ionicons"
import Create_Post_Screen from "../screens/createPost_Screen"
import Profile_Screen from "../screens/profile_Screen"
import Feed_Screen from "../screens/feed_Screen"

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
return(
    <Tab.Navigator
        screenOptions = {({route}) => ({
            tabBarIcon:({ focused, color, size}) => {
                let iconName;
                if(route.name === "Feed"){
                    iconName = focused
                        ? 'book'
                        : 'book-outline';
                } else if (route.name === 'create post'){
                    iconName = focused ? 'create' :'create-outline';
                }
                return <Ionicons name = {iconName} size = {size} color = {color} />
            },
        })}
        tabBarOptions = {{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
    >
        <Tab.Screen name = "feed" component = {Feed_Screen}/>
        <Tab.Screen name  = "create post" component = {Create_Post_Screen}/>
    </Tab.Navigator>
)
}


export default BottomTabNavigator





