import React from "react";
import {NavigationContainer,DarkTheme,DefaultTheme} from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieScreen from "./screens/MovieScreen"
import TVShowScreen from "./screens/TVShowScreen";
import SearchScreen from "./screens/SearchScreen";
import DetailScreen from "./screens/DetailScreen"
import { useColorScheme } from "react-native";
import { themeColors } from "./utils/colors";
import Header from "./src/components/Header";

// top tabs navigator
const TopTabs = () => {
  const TopTab = createMaterialTopTabNavigator();

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          color: themeColors.primary,
          textTransform: "capitalize",
          height: 20,
        },
        tabBarIndicatorStyle: {
          height: 3,
          borderRadius: 3,
          backgroundColor: themeColors.secondary,
        },
      }}
    >
      <TopTab.Screen name="Movies" component={MovieScreen} />
      <TopTab.Screen name="Search" component={SearchScreen} />
      <TopTab.Screen name="TV Shows" component={TVShowScreen} />
    </TopTab.Navigator>
  );
};

// home stack navigator
const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerStyle: {
          backgroundColor: themeColors.primary,
        },
      }}
    >
      <Stack.Screen
        name="Movie App"
        options={{
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "Verdana",
          },
        }}
        component={TopTabs}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          presentation: "card",
          headerShown: false,
          headerTitle: "More Details",
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: themeColors.complementary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Movies = () => {
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer
      theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <HomeStack />
    </NavigationContainer>
  );
};

export default Movies;
