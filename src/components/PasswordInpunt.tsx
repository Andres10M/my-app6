import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type PasswordInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChangeText }) => (
  <TextInput
    style={styles.input}
    placeholder="Introduce caracteres (máx 2 conjuntos)"
    value={value}
    onChangeText={onChangeText}
  />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 20,
    borderRadius: 5,
    width: '80%',
    textAlign: 'center',
  },
});

export default PasswordInput;
