// screens/MenuDetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'MenuDetails'>;

export default function MenuDetailsScreen({ route }: Props) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.course}>{item.course}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>R {item.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '700' },
  course: { marginVertical: 8, fontWeight: '600', color: '#666' },
  description: { fontSize: 16, marginBottom: 12 },
  price: { fontSize: 18, fontWeight: '600', color: '#2f6bed' },
});
