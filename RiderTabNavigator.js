import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RiderHomeScreen from './RiderHomeScreen';
import RideHistoryScreen from './RideHistoryScreen';
import ProfileScreen from './ProfileScreen';
import MoreOptionsScreen from './MoreOptionsScreen';

const Tab = createBottomTabNavigator();

const RiderTabNavigator = () => (
  <Tab.Navigator
      screenOptions={({ route }) => ({
            headerShown: false,
                  tabBarIcon: ({ color, size }) => {
                          let iconName;
                                  if (route.name === 'RiderHome') iconName = 'home-outline';
                                          else if (route.name === 'RideHistory') iconName = 'time-outline';
                                                  else if (route.name === 'Profile') iconName = 'person-outline';
                                                          else if (route.name === 'MoreOptions') iconName = 'menu-outline';
                                                                  return <Ionicons name={iconName} size={size} color={color} />;
                                                                        },
                                                                              tabBarActiveTintColor: '#007AFF',
                                                                                    tabBarInactiveTintColor: 'gray',
                                                                                        })}
                                                                                          >
                                                                                              <Tab.Screen name="RiderHome" component={RiderHomeScreen} />
                                                                                                  <Tab.Screen name="RideHistory" component={RideHistoryScreen} />
                                                                                                      <Tab.Screen name="Profile" component={ProfileScreen} />
                                                                                                          <Tab.Screen name="MoreOptions" component={MoreOptionsScreen} />
                                                                                                            </Tab.Navigator>
                                                                                                            );

                                                                                                            export default RiderTabNavigator;