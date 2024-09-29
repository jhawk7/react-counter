import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clicker from './components/Clicker.js';
import { useState } from 'react';
import * as Haptics from 'expo-haptics';

export default function App() {
  const [counter, updateCounter] = useState(0)
  const updateClick = () => {
    updateCounter(counter +1)
    Haptics.impactAsync()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clicker</Text>
      <Clicker clicks={counter}  onClick={updateClick}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontWeight: 'bold',
    color:'black',
    fontSize:40
  },
});
