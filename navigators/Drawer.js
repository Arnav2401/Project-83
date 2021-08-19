import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import MaterialTab from './Tab';
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={MaterialTab} />
            <Drawer.Screen name='Profile' component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator


