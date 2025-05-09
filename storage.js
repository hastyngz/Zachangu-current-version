// storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUser = async (user) => {
  try {
      await AsyncStorage.setItem('zachangu_user', JSON.stringify(user));
        } catch (e) {
            console.error('Error saving user:', e);
              }
              };

              export const getUser = async () => {
                try {
                    const userData = await AsyncStorage.getItem('zachangu_user');
                        return userData ? JSON.parse(userData) : null;
                          } catch (e) {
                              console.error('Error loading user:', e);
                                  return null;
                                    }
                                    };

                                    export const clearUser = async () => {
                                      try {
                                          await AsyncStorage.removeItem('zachangu_user');
                                            } catch (e) {
                                                console.error('Error clearing user:', e);
                                                  }
                                                  };