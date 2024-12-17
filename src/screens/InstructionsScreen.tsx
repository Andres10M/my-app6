// screens/InstructionsScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InstructionsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [passwordLevel, setPasswordLevel] = useState<string>('');

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Genera Contraseñas seguras y de forma Gratuita 😎😎😎</Text>
      <Text style={styles.subtitle}>Pequeñas Instrucciones:</Text>
      <View style={styles.levelContainer}>
        <TouchableOpacity
          style={[styles.levelBox, { backgroundColor: 'red' }]}
          onPress={() => setPasswordLevel('Poco Segura')}
        >
          <Text style={styles.levelText}>Poco Segura</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelBox, { backgroundColor: 'yellow' }]}
          onPress={() => setPasswordLevel('Media')}
        >
          <Text style={styles.levelText}>Media</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelBox, { backgroundColor: 'green' }]}
          onPress={() => setPasswordLevel('Segura')}
        >
          <Text style={styles.levelText}>Segura</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Nivel seleccionado: {passwordLevel}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PasswordGenerator')}
      >
        <Text style={styles.buttonText}>Generemos tu contraseña :D</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  levelContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  levelBox: {
    padding: 10,
    borderRadius: 8,
    margin: 5,
  },
  levelText: {
    fontSize: 18,
    color: 'white',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default InstructionsScreen;
