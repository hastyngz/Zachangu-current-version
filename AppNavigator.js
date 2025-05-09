import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Auth Screens
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

// Rider Flow Tabs
import RiderTabNavigator from './RiderTabNavigator';

// Driver Flow Tabs
import DriverTabNavigator from './DriverTabNavigator';

// Shared Screens
import SelectCityScreen from './SelectCityScreen';
import TaxiTypeScreen from './TaxiTypeScreen';
import DestinationInputScreen from './DestinationInputScreen';
import DriverSelectionScreen from './DriverSelectionScreen';
import RideSummaryScreen from './RideSummaryScreen';
import PaymentScreen from './PaymentScreen';
import RideSuccessScreen from './RideSuccessScreen';
import RideTrackingScreen from './RideTrackingScreen';
import TrackDriverScreen from './TrackDriverScreen';
import SupportScreen from './SupportScreen';
import TermsAndConditionsScreen from './TermsAndConditionsScreen';
import NotificationsScreen from './NotificationsScreen';
import PromotionsScreen from './PromotionsScreen';
import MoreOptionsScreen from './MoreOptionsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [initialRoute, setInitialRoute] = useState(null);

    useEffect(() => {
        const loadRole = async () => {
              const role = await AsyncStorage.getItem('role');
                    if (role === 'driver') {
                            setInitialRoute('DriverHome');
                                  } else if (role === 'rider') {
                                          setInitialRoute('RiderHome');
                                                } else {
                                                        setInitialRoute('Login');
                                                              }
                                                                  };
                                                                      loadRole();
                                                                        }, []);

                                                                          if (!initialRoute) return null;

                                                                            return (
                                                                                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
                                                                                      {/* Auth */}
                                                                                            <Stack.Screen name="Login" component={LoginScreen} />
                                                                                                  <Stack.Screen name="Register" component={RegisterScreen} />

                                                                                                        {/* Rider Main Flow (with bottom tabs) */}
                                                                                                              <Stack.Screen name="RiderHome" component={RiderTabNavigator} />

                                                                                                                    {/* Driver Main Flow (with bottom tabs) */}
                                                                                                                          <Stack.Screen name="DriverHome" component={DriverTabNavigator} />

                                                                                                                                {/* Rider Booking Flow */}
                                                                                                                                      <Stack.Screen name="SelectCity" component={SelectCityScreen} />
                                                                                                                                            <Stack.Screen name="TaxiType" component={TaxiTypeScreen} />
                                                                                                                                                  <Stack.Screen name="DestinationInput" component={DestinationInputScreen} />
                                                                                                                                                        <Stack.Screen name="DriverSelection" component={DriverSelectionScreen} />
                                                                                                                                                              <Stack.Screen name="RideSummary" component={RideSummaryScreen} />
                                                                                                                                                                    <Stack.Screen name="Payment" component={PaymentScreen} />
                                                                                                                                                                          <Stack.Screen name="RideSuccess" component={RideSuccessScreen} />
                                                                                                                                                                                <Stack.Screen name="RideTracking" component={RideTrackingScreen} />
                                                                                                                                                                                      <Stack.Screen name="TrackDriver" component={TrackDriverScreen} />

                                                                                                                                                                                            {/* Shared Screens */}
                                                                                                                                                                                                  <Stack.Screen name="Support" component={SupportScreen} />
                                                                                                                                                                                                        <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
                                                                                                                                                                                                              <Stack.Screen name="Notifications" component={NotificationsScreen} />
                                                                                                                                                                                                                    <Stack.Screen name="Promotions" component={PromotionsScreen} />
                                                                                                                                                                                                                          <Stack.Screen name="MoreOptions" component={MoreOptionsScreen} />
                                                                                                                                                                                                                              </Stack.Navigator>
                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                export default AppNavigator;