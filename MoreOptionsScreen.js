import React from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MoreOptionsScreen = () => {
  const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
              <Button title="Support" onPress={() => navigation.navigate('Support')} />
                    <Button title="Terms & Conditions" onPress={() => navigation.navigate('TermsAndConditions')} />
                          <Button title="Driver Profile" onPress={() => navigation.navigate('DriverProfile')} />
                                <Button title="Ride History" onPress={() => navigation.navigate('RideHistory')} />
                                      <Button title="Promotions" onPress={() => navigation.navigate('Promotions')} />
                                            <Button title="Notifications" onPress={() => navigation.navigate('Notifications')} />
                                                </ScrollView>
                                                  );
                                                  };

                                                  const styles = StyleSheet.create({
                                                    container: {
                                                        padding: 20,
                                                            justifyContent: 'center',
                                                                gap: 10,
                                                                  },
                                                                  });

                                                                  export default MoreOptionsScreen;