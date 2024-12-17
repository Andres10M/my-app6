// screens/PasswordGeneratorScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Clipboard from 'expo-clipboard';

const PasswordGeneratorScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [password, setPassword] = useState<string>('');
  const [length, setLength] = useState<number>(8);
  const [selectedChars, setSelectedChars] = useState<string>('ABC abc');

  const generatePassword = () => {
    const chars = selectedChars;
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  const copyToClipboard = () => {
    Clipboard.setString(password);
    Alert.alert('Copiado al Portapapeles', 'Tu contraseña ha sido copiada.');
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Cree contraseñas seguras para mantener tus cuentas seguras en línea</Text>
      <Text style={styles.generatedPassword}>{password}</Text>
      <Slider
        style={styles.slider}
        minimumValue={8}
        maximumValue={15}
        step={1}
        value={length}
        onValueChange={setLength}
      />
      <Text style={styles.subtitle}>Longitud de la contraseña: {length}</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce caracteres (máx 2 conjuntos)"
        value={selectedChars}
        onChangeText={setSelectedChars}
      />
      <TouchableOpacity style={styles.button} onPress={() => setPassword(generatePassword())}>
        <Text style={styles.buttonText}>Generar Contraseña</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.grayButton} onPress={copyToClipboard}>
          <Text style={styles.grayButtonText}>Copiar al Portapapeles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.grayButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.grayButtonText}>Volver al Menú</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  generatedPassword: {
    fontSize: 24,
    marginBottom: 20,
  },
  slider: {
    width: 200,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: 250,
    marginTop: 10,
    paddingHorizontal: 8,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  grayButton: {
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    width: 200,
    alignItems: 'center',
  },
  grayButtonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default PasswordGeneratorScreen;
