import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SetAvailabilityScreen = () => {
  const [isAvailable, setIsAvailable] = useState(false);

    const toggleSwitch = () => setIsAvailable(prev => !prev);

      return (
          <View style={styles.container}>
                <Text style={styles.label}>Availability</Text>
                      <Switch value={isAvailable} onValueChange={toggleSwitch} />
                            <Text style={styles.status}>{isAvailable ? 'You are available' : 'You are unavailable'}</Text>
                                </View>
                                  );
                                  };

                                  const styles = StyleSheet.create({
                                    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
                                      label: { fontSize: 20, marginBottom: 10 },
                                        status: { marginTop: 20, fontSize: 16 }
                                        });

                                        export default SetAvailabilityScreen;