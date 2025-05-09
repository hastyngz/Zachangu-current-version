import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import DriverHomeScreen from './DriverHomeScreen';
import AssignedRidesScreen from './AssignedRidesScreen';
import DriverProfileScreen from './DriverProfileScreen';
import EarningsScreen from './EarningsScreen';

const Tab = createBottomTabNavigator();

const DriverTabNavigator = () => (
  <Tab.Navigator
      screenOptions={({ route }) => ({
            headerShown: false,
                  tabBarIcon: ({ color, size }) => {
                          let iconName;
                                  if (route.name === 'DriverHome') iconName = 'car-outline';
                                          else if (route.name === 'AssignedRides') iconName = 'clipboard-outline';
                                                  else if (route.name === 'DriverProfile') iconName = 'person-circle-outline';
                                                          else if (route.name === 'Earnings') iconName = 'cash-outline';
                                                                  return <Ionicons name={iconName} size={size} color={color} />;
                                                                        },
                                                                              tabBarActiveTintColor: '#007AFF',
                                                                                    tabBarInactiveTintColor: 'gray',
                                                                                        })}
                                                                                          >
                                                                                              <Tab.Screen name="DriverHome" component={DriverHomeScreen} />
                                                                                                  <Tab.Screen name="AssignedRides" component={AssignedRidesScreen} />
                                                                                                      <Tab.Screen name="DriverProfile" component={DriverProfileScreen} />
                                                                                                          <Tab.Screen name="Earnings" component={EarningsScreen} />
                                                                                                            </Tab.Navigator>
                                                                                                            );

                                                                                                            export default DriverTabNavigator;