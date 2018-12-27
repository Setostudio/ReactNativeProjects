import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";

import appColor from "../commonTheme";

import screenNames from "../screens/screenNames";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import ViewProductScreen from "../screens/ViewProductScreen";
const TabStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    Cart: CartScreen,
    Account: AccountScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === screenNames.HomeScreen) {
          iconName = `heartbeat`;
        } else if (routeName == screenNames.AccountScreen) {
          iconName = "user-md";
        } else if (routeName == screenNames.CartScreen) {
          iconName = "cart-plus";
        } else if (routeName == screenNames.SearchScreen) {
          iconName = "search";
        }
        return (
          <Icon name={iconName} size={focused ? 30 : 25} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: appColor.primaryColor,
      inactiveTintColor: appColor.darkGrey,
      style: {
        backgroundColor: "#fafafa"
      }
    }
  }
);

const OutterStack = createStackNavigator(
  {
    Tab: {
      screen: TabStack
    },
    ViewProduct: {
      screen: ViewProductScreen
    },
    Cart: {
      screen: CartScreen
    }
  },
  {
    headerMode: "none"
  }
);
export default createAppContainer(OutterStack);
