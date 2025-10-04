// screens/AboutScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Chef Menu Manager</Text>
      <Text style={styles.text}>
        This app was created for the Part 2 POE. 
        It allows a chef to add menu items (name, description, course, price),
        view the menu, see totals, and check item details.
      </Text>
      <Text style={styles.text}>
        Developed by: [Your Name], Student Number: [Your Number]
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  text: { fontSize: 16, marginBottom: 10, lineHeight: 22 },
});
