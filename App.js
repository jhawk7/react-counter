import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter.js';
import { useEffect, useState } from 'react';
import * as Haptics from 'expo-haptics';
import ResetButton from './components/ResetButton.js';

const App = () => {
  const [counter, setCounter] = useState()
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
      return Number(res.count)
    })
    .catch(error => {
      console.error(error)
      return 0
    })

    setCounter(count)
  }

  const updateCounter = async () => {
    Haptics.impactAsync()
    setCounter(counter +1)
    await fetch('url', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  const resetCounter = async () => {
    Haptics.impactAsync()
    setCounter(0)
    await fetch('http://192.168.50.177:8888/count', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        counter: 0,
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getCount()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Counter clicks={counter} onClick={updateCounter}/>
      <ResetButton onClick={resetCounter}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ead6',
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
