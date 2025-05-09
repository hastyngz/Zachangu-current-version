// DriverProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const DriverProfileScreen = () => {
  const [vehicleType, setVehicleType] = useState('');
    const [profilePic, setProfilePic] = useState(null);
      const [vehiclePic, setVehiclePic] = useState(null);

        const pickImage = async (setter) => {
            // Request permission to access media library
                const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

                    if (permissionResult.granted === false) {
                          alert("Permission to access the media library is required!");
                                return;
                                    }

                                        // Open image picker
                                            const result = await ImagePicker.launchImageLibraryAsync({
                                                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                                        allowsEditing: true,
                                                              aspect: [4, 4],
                                                                    quality: 1,
                                                                        });

                                                                            if (!result.canceled && result.assets?.length > 0) {
                                                                                  setter(result.assets[0].uri);
                                                                                      }
                                                                                        };

                                                                                          const handleSave = () => {
                                                                                              // Save logic here (e.g., update Firebase or your DB)
                                                                                                  console.log('Vehicle Type:', vehicleType);
                                                                                                      console.log('Profile Pic:', profilePic);
                                                                                                          console.log('Vehicle Pic:', vehiclePic);
                                                                                                            };

                                                                                                              return (
                                                                                                                  <View style={styles.container}>
                                                                                                                        <Text style={styles.heading}>Update Driver Profile</Text>

                                                                                                                              <Text style={styles.label}>Vehicle Type:</Text>
                                                                                                                                    <TextInput
                                                                                                                                            style={styles.input}
                                                                                                                                                    placeholder="e.g., Toyota Corolla or Motorbike"
                                                                                                                                                            value={vehicleType}
                                                                                                                                                                    onChangeText={setVehicleType}
                                                                                                                                                                          />

                                                                                                                                                                                <Text style={styles.label}>Profile Picture:</Text>
                                                                                                                                                                                      <Button title="Choose Profile Picture" onPress={() => pickImage(setProfilePic)} />
                                                                                                                                                                                            {profilePic && <Image source={{ uri: profilePic }} style={styles.image} />}

                                                                                                                                                                                                  <Text style={styles.label}>Vehicle Picture:</Text>
                                                                                                                                                                                                        <Button title="Choose Vehicle Picture" onPress={() => pickImage(setVehiclePic)} />
                                                                                                                                                                                                              {vehiclePic && <Image source={{ uri: vehiclePic }} style={styles.image} />}

                                                                                                                                                                                                                    <Button title="Save Changes" onPress={handleSave} color="#007AFF" />
                                                                                                                                                                                                                        </View>
                                                                                                                                                                                                                          );
                                                                                                                                                                                                                          };

                                                                                                                                                                                                                          const styles = StyleSheet.create({
                                                                                                                                                                                                                            container: {
                                                                                                                                                                                                                                padding: 16,
                                                                                                                                                                                                                                    flex: 1,
                                                                                                                                                                                                                                        backgroundColor: '#fff',
                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                            heading: {
                                                                                                                                                                                                                                                fontSize: 22,
                                                                                                                                                                                                                                                    fontWeight: 'bold',
                                                                                                                                                                                                                                                        marginBottom: 16,
                                                                                                                                                                                                                                                            textAlign: 'center',
                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                label: {
                                                                                                                                                                                                                                                                    fontWeight: 'bold',
                                                                                                                                                                                                                                                                        marginTop: 12,
                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                            input: {
                                                                                                                                                                                                                                                                                borderWidth: 1,
                                                                                                                                                                                                                                                                                    borderColor: '#ccc',
                                                                                                                                                                                                                                                                                        padding: 10,
                                                                                                                                                                                                                                                                                            borderRadius: 8,
                                                                                                                                                                                                                                                                                                marginTop: 4,
                                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                                    image: {
                                                                                                                                                                                                                                                                                                        width: 120,
                                                                                                                                                                                                                                                                                                            height: 120,
                                                                                                                                                                                                                                                                                                                borderRadius: 8,
                                                                                                                                                                                                                                                                                                                    marginTop: 10,
                                                                                                                                                                                                                                                                                                                        alignSelf: 'center',
                                                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                                          });

                                                                                                                                                                                                                                                                                                                          export default DriverProfileScreen;