import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from '@react-native-community/slider';


type RootStackParamList = {
  Home: undefined;
  Instructions: undefined;
  PasswordGenerator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <View style={styles.outerContainer}>
    <View style={styles.greenSide}></View>
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Bienvenido al Generador de Contraseñas</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Instructions')}
      >
        <Text style={styles.buttonText}>Comencemos</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.greenSide}></View>
  </View>
);

const InstructionsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <View style={styles.mainContainer}>
    <Text style={styles.title}>Genera Contraseñas seguras y de forma Gratuita 😎😎😎</Text>
    <Text style={styles.subtitle}>Pequeñas Instrucciones:</Text>
    <View style={styles.levelContainer}>
      <View style={styles.redBox}>
        <Text style={styles.levelText}>Poco segura</Text>
      </View>
      <View style={styles.yellowBox}>
        <Text style={styles.levelText}>Media</Text>
      </View>
      <View style={styles.greenBox}>
        <Text style={styles.levelText}>Segura</Text>
      </View>
    </View>
    <Text style={styles.subtitle}>
      Usa caracteres como: <Text style={styles.highlight}>ABC abc 123 #$&</Text>
    </Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('PasswordGenerator')}
    >
      <Text style={styles.buttonText}>Generemos tu contraseña :D</Text>
    </TouchableOpacity>
  </View>
);

const PasswordGeneratorScreen: React.FC = () => {
  const [password, setPassword] = React.useState<string>('');
  const [length, setLength] = React.useState<number>(8);
  const [selectedChars, setSelectedChars] = React.useState<string>('ABC abc');

  const generatePassword = () => {
    const chars = selectedChars;
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
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
        <TouchableOpacity style={styles.grayButton}>
          <Text style={styles.grayButtonText}>Copiar al Portapapeles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.grayButton}>
          <Text style={styles.grayButtonText}>Volver al Menú</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Instructions" component={InstructionsScreen} options={{ title: 'Instrucciones' }} />
        <Stack.Screen name="PasswordGenerator" component={PasswordGeneratorScreen} options={{ title: 'Generador de Contraseñas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  greenSide: {
    flex: 1,
    backgroundColor: 'green',
  },
  mainContainer: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  levelContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  redBox: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  greenBox: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  levelText: {
    color: 'white',
    fontWeight: 'bold',
  },
  highlight: {
    color: 'blue',
    fontWeight: 'bold',
  },
  generatedPassword: {
    fontSize: 24,
    marginVertical: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  slider: {
    width: '80%',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 20,
    borderRadius: 5,
    width: '80%',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  grayButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  grayButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
