// NotificationsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
  return (
      <View style={styles.container}>
            <Text style={styles.title}>Notifications</Text>
                  <Text style={styles.notification}>Your driver is on the way.</Text>
                        <Text style={styles.notification}>Your ride is about to start!</Text>
                              <Button title="Dismiss" onPress={() => alert('Notification dismissed')} />
                                  </View>
                                    );
                                    };

                                    const styles = StyleSheet.create({
                                      container: { flex: 1, padding: 20 },
                                        title: { fontSize: 24, marginBottom: 20 },
                                          notification: { fontSize: 18, marginBottom: 10 },
                                          });

                                          export default NotificationsScreen;