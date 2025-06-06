import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#0053EB',
      headerStyle: {
        backgroundColor: '#62AEAD'
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#62AEADE8',
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={ focused ? 'home-sharp' : 'home-outline' }
              color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{ 
          title: 'Sobre',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={ focused ? 'information-circle' : 'information-circle-outline' }
              color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}