import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'react-native';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            height: 80,
          },
          headerShadowVisible: false,
          headerTitle: () => {
            return <Image source={require('../assets/icon-twitter.png')} />;
          },
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons name="home" size={size} color={color} />
              );
            } else {
              return (
                <MaterialCommunityIcons
                  name="home-outline"
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerStyle: {
            height: 80,
          },
          headerShadowVisible: false,
          headerTitle: () => {
            return <Image source={require('../assets/icon-twitter.png')} />;
          },
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />;
            } else {
              return (
                <Ionicons name="search-outline" size={size} color={color} />
              );
            }
          },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            height: 80,
          },
          headerShadowVisible: false,
          headerTitle: () => {
            return <Image source={require('../assets/icon-twitter.png')} />;
          },
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="user" size={22} color={color} />;
            } else {
              return <FontAwesome name="user-o" size={20} color={color} />;
            }
          },
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
