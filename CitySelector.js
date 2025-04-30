
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

const cities = ['Lilongwe', 'Blantyre', 'Mzuzu', 'Zomba', 'Mangochi', 'Dedza', 'Salima', 'Nkhata Bay', 'Karonga', 'Mzimba', 'Nkhotakota', 'Intercity'];

const CitySelector = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cities.map((city) => (
        <Button key={city} title={city} onPress={() => alert(`Selected: ${city}`)} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
});

export default CitySelector;
