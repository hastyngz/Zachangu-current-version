// ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('John Doe');
    const [phone, setPhone] = useState('+265 99 999 999');
      
        return (
            <View style={styles.container}>
                  <Text style={styles.title}>Profile</Text>
                        <Text style={styles.label}>Name:</Text>
                              <TextInput style={styles.input} value={name} onChangeText={setName} />
                                    
                                          <Text style={styles.label}>Phone:</Text>
                                                <TextInput style={styles.input} value={phone} onChangeText={setPhone} />
                                                      
                                                            <Button title="Update Profile" onPress={() => alert('Profile updated!')} />
                                                                  <Button title="Manage Payment Methods" onPress={() => alert('Navigate to Payment Screen')} />
                                                                        <Button title="View Ride History" onPress={() => alert('Navigate to Ride History')} />
                                                                            </View>
                                                                              );
                                                                              };

                                                                              const styles = StyleSheet.create({
                                                                                container: { flex: 1, padding: 20 },
                                                                                  title: { fontSize: 24, marginBottom: 20 },
                                                                                    label: { fontSize: 18 },
                                                                                      input: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingHorizontal: 10 },
                                                                                      });

                                                                                      export default ProfileScreen;