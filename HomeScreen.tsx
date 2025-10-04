// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import type { MenuItem } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'> & {
  menuItems: MenuItem[];
};

export default function HomeScreen({ navigation, menuItems }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Menu</Text>
      <Text style={styles.counter}>Total items: {menuItems.length}</Text>

      <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('MenuDetails', { item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.price}>R {item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No menu items yet. Add some!</Text>}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddMenu')}>
        <Text style={styles.buttonText}>+ Add Dish</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.about]} onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>About App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700' },
  counter: { marginVertical: 8, fontSize: 16 },
  card: { padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginVertical: 6 },
  name: { fontWeight: '700', fontSize: 16 },
  course: { color: '#666' },
  price: { color: '#000', fontWeight: '600' },
  empty: { marginTop: 20, textAlign: 'center', color: '#888' },
  button: { backgroundColor: '#2f6bed', padding: 12, borderRadius: 8, marginTop: 12 },
  about: { backgroundColor: '#666' },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: '600' },
});
