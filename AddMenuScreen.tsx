// screens/AddMenuScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import type { MenuItem, Course } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'AddMenu'> & {
  addMenuItem: (item: MenuItem) => void;
};

const COURSES: Course[] = ['Starters', 'Mains', 'Dessert'];

export default function AddMenuScreen({ navigation, addMenuItem }: Props) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [course, setCourse] = useState<Course>('Starters');
  const [price, setPrice] = useState('');

  const saveItem = () => {
    if (!name.trim() || !desc.trim() || !price) {
      Alert.alert('Validation', 'All fields are required.');
      return;
    }

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      Alert.alert('Validation', 'Enter a valid price.');
      return;
    }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name,
      description: desc,
      course,
      price: parsedPrice,
    };

    addMenuItem(newItem);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>

      <TextInput style={styles.input} placeholder="Dish name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Description" value={desc} onChangeText={setDesc} />

      <Picker selectedValue={course} onValueChange={setCourse} style={styles.input}>
        {COURSES.map(c => <Picker.Item key={c} label={c} value={c} />)}
      </Picker>

      <TextInput style={styles.input} placeholder="Price" value={price} onChangeText={setPrice} keyboardType="decimal-pad" />

      <TouchableOpacity style={styles.button} onPress={saveItem}>
        <Text style={styles.buttonText}>Save Dish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginBottom: 12 },
  button: { backgroundColor: '#2f6bed', padding: 12, borderRadius: 8 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: '600' },
});
