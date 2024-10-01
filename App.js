import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clicker from './components/Clicker.js';
import { useEffect, useState } from 'react';
import * as Haptics from 'expo-haptics';

const App = () => {
  const getCount = async () => {
    const count = await fetch('url', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    })
    .then(response => response.json())
    .then(res => {
      console.log(res)
      return res.count
    })
    .catch(error => {
      console.error(error)
    })

    return count
  }

  const updateClick = () => {
    updateCounter(counter +1)
    Haptics.impactAsync()
    fetch('url', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }

  let initialCount 
  useEffect(() => {
    initialCount = getCount()
  })

  const [counter, updateCounter] = useState(initialCount)


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

export default App
