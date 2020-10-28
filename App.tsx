import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Contact from "./screens/Contact";
import Menu from "./screens/Menu";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            color = focused ? "tomato" : "gray";
            if (route.name === "Home") {
              iconName = "ios-home";
            } else if (route.name === "About") {
              iconName = "ios-information-circle";
            } else if (route.name === "Contact") {
              iconName = "ios-call";
            } else if (route.name === "Menu") {
              iconName = "ios-menu";
            }
            return <Ionicons name={iconName} size={20} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
