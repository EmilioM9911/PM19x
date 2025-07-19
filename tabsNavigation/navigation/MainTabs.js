import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeTab from '../screens/HomeTab';
import SettingsTab from '../screens/SettingsTab';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') iconName = 'home';
                    else if (route.name === 'Profile') iconName = 'person';
                    else if (route.name === 'Settings') iconName = 'settings';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007BFF',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    paddingBottom: 5,
                    height: 60,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeTab} />
            <Tab.Screen name="Profile" component={ProfileStack} />
            <Tab.Screen name="Settings" component={SettingsTab} />
        </Tab.Navigator>
    );
}
