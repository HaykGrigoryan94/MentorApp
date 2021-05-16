import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/components/NavBar'
import ConfigurationFirstStep from './src/components/ConfigurationFirstStep'

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <ConfigurationFirstStep />
      <Text>hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
