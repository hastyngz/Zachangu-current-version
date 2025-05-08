import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SelectCityScreen from './SelectCityScreen';
import TaxiTypeScreen from './TaxiTypeScreen';
import DestinationInputScreen from './DestinationInputScreen';
import DriverSelectionScreen from './DriverSelectionScreen';
import RideSummaryScreen from './RideSummaryScreen';
import PaymentScreen from './PaymentScreen';
import RideTrackingScreen from './RideTrackingScreen';
import RideHistoryScreen from './RideHistoryScreen';
import NotificationsScreen from './NotificationsScreen';
import ProfileScreen from './ProfileScreen';
import SupportScreen from './SupportScreen';
import PromotionsScreen from './PromotionsScreen';
import TermsAndConditionsScreen from './TermsAndConditionsScreen';
import DriverProfileScreen from './DriverProfileScreen';
import MoreOptionsScreen from './MoreOptionsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="SelectCity" component={SelectCityScreen} />
                              <Stack.Screen name="TaxiType" component={TaxiTypeScreen} />
                                    <Stack.Screen name="DestinationInput" component={DestinationInputScreen} />
                                          <Stack.Screen name="DriverSelection" component={DriverSelectionScreen} />
                                                <Stack.Screen name="RideSummary" component={RideSummaryScreen} />
                                                      <Stack.Screen name="Payment" component={PaymentScreen} />
                                                            <Stack.Screen name="RideTracking" component={RideTrackingScreen} />
                                                                  <Stack.Screen name="RideHistory" component={RideHistoryScreen} />
                                                                        <Stack.Screen name="Notifications" component={NotificationsScreen} />
                                                                              <Stack.Screen name="Profile" component={ProfileScreen} />
                                                                                    <Stack.Screen name="Support" component={SupportScreen} />
                                                                                          <Stack.Screen name="Promotions" component={PromotionsScreen} />
                                                                                                <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
                                                                                                      <Stack.Screen name="DriverProfile" component={DriverProfileScreen} />
                                                                                                            <Stack.Screen name="MoreOptions" component={MoreOptionsScreen} />
                                                                                                                </Stack.Navigator>
                                                                                                                  );
                                                                                                                  };

                                                                                                                  export default AppNavigator;