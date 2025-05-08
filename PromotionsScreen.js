// PromotionsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PromotionsScreen = () => {
      return (
            <View style={styles.container}>
                  <Text style={styles.title}>Promotions</Text>
                        <Text style={styles.promo}>Get 10% off your next ride!</Text>
                              <Button title="Enter Promo Code" onPress={() => alert('Enter Promo Code')} />
                                  </View>
      );
};

const styles = StyleSheet.create({
      container: { flex: 1, padding: 20 },
        title: { fontSize: 24, marginBottom: 20 },
          promo: { fontSize: 18, marginBottom: 10 },
});

export default PromotionsScreen;
