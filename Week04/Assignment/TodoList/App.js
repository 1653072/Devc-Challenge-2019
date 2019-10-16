import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";

import CompleteScreen from './screens/CompleteScreen';
import HomeScreen from './screens/HomeScreen';
import ActiveScreen from './screens/ActiveScreen';
import Detail from './screens/Detail';

/*
  =============================================================
  STACK INFORMATION (For transition of screens & header tabbar)
  =============================================================
*/
const AllStackHome = createStackNavigator ({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      title: "Todo List",
      headerStyle: {
        backgroundColor: '#ffe5e1',
      },
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,
      }
    }
  },
  Detail: { 
    screen: Detail,
    navigationOptions: {
      title: "Todo Detail",
      headerStyle: {
        backgroundColor: '#ffe5e1',
      },
      headerTitleStyle: {
        textAlign: "center",
        flex: .82,
      }
    }
  }
})

const CompleteStack = createStackNavigator ({
  Complete: {
    screen: CompleteScreen,
    navigationOptions: {
      title: 'Completed Todo List',
      headerStyle: {
        backgroundColor: '#ffe5e1',
      },
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,
      }
    }
  }
})

const ActiveStack = createStackNavigator ({
  Active: {
    screen: ActiveScreen,
    navigationOptions: {
      title: 'Active Todo List',
      headerStyle: {
        backgroundColor: '#ffe5e1',
      },
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,
      }
    }
  }
})

/*
  =============================================
  BOTTOM TABBAR INFORMATION (For bottom tabbar)
  =============================================
*/
const tabBarStyle = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'black',
  style: {
    backgroundColor: '#ffe5e1',
  }
};

const Tabbar = createBottomTabNavigator({
  Home: { 
    screen: AllStackHome,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => {
        let IconComponent = FontAwesome
        return <IconComponent name={'home'} size={24} color={tintColor} />;
      },
      tabBarOptions: tabBarStyle
    }
  },
  Complete: { 
    screen: CompleteStack,
    navigationOptions: {
      tabBarLabel: 'Complete',
      tabBarIcon: ({ tintColor }) => {
        let IconComponent = Ionicons
        return <IconComponent name={'md-done-all'} size={24} color={tintColor} />;
      },
      tabBarOptions: tabBarStyle
    }
  },
  Active: { 
    screen: ActiveStack,
    navigationOptions: {
      tabBarLabel: 'Active',
      tabBarIcon: ({ tintColor }) => {
        let IconComponent = Feather
        return <IconComponent name={'activity'} size={24} color={tintColor} />;
      },
      tabBarOptions: tabBarStyle
    }
  }
})

const AppContainer = createAppContainer(Tabbar);
export default AppContainer

// Ref: https://snack.expo.io/@tanbui224/navigation-with-params