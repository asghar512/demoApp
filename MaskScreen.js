import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';



import Splash from './Splash';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import MaskScreen from './MaskScreen'
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';
// import {createAppContainer} from '@react-navigation/native'
// import {createDrawerNavigator} from '@react-navigation/drawer'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      
      <Tab.Screen
        name="Notifications"
        component={FaceStackScreen}
        options={{
          tabBarLabel: 'First Screen',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Explore"
        component={MaskStackScreen}
        options={{
          tabBarLabel: 'Second Screen',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ThirdStackScreen}
        options={{
          tabBarLabel: 'Third Screen',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="fourthScreen"
        component={FourthStackScreen}
        options={{
          tabBarLabel: 'Fourth Screen',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
);

export default MainTabScreen;



const FaceStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#0782F9', 
        },
        headerTintColor: '#fff',
        headerTitleAlign:'center',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Home Screen" component={HomeScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#0782F9" onPress={() => 
              navigation.openDrawer()
            }></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);
const MaskStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#0782F9',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name="Second Screen" component={SecondScreen}  />
          
          
  </DetailsStack.Navigator>

);

const ThirdStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#0782F9',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name="Third Screen" component={ThirdScreen}  />
          
          
  </DetailsStack.Navigator>

);

const FourthStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#0782F9',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name="Fourth Screen" component={FourthScreen}  />
          
          
  </DetailsStack.Navigator>

);

// const appnav= createDrawerNavigator({
//   Home:{
//     screen:HomeScreen
//   },
//   Mask:{
//     screen:Mask
//   }
// })
// export default createAppContainer(appnav)