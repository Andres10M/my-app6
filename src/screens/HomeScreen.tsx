import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.topGreenBar} />
    <View style={styles.mainContent}>
      <Text style={styles.title}>
        Bienvenido al generador de{'\n'}Contraseñas Estudiantil
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Instructions')}
      >
        <Text style={styles.buttonText}>Comencemos</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.bottomGreenBar} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  topGreenBar: {
    height: '15%',
    backgroundColor: '#00FF33', // Verde brillante
  },
  mainContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'serif', // Tipo de letra similar a la imagen
    color: 'black',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#008CFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  bottomGreenBar: {
    height: '15%',
    backgroundColor: '#00FF33',
  },
});

export default HomeScreen;
