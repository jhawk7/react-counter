import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter.js';
import { useEffect, useState } from 'react';
import * as Haptics from 'expo-haptics';
import ResetButton from './components/ResetButton.js';
import {API_URL, WS_URL} from '@env';

const App = () => {
  const [counter, setCounter] = useState()
  const [show, setShow] = useState(false)
  const ws = new WebSocket(WS_URL)

  useEffect(() => {
    getCount()
  }, [])

  ws.onerror = e => {
    console.log(e.data)
  }

  const getCount = async () => {
    const count = await fetch(API_URL, {
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
      return -1
    })

    if (count >= 0) {
      setCounter(count)
      setShow(true)
    }
  }

  const updateCounter = async () => {
    Haptics.impactAsync()
    setCounter(counter +1)

    ws.send(JSON.stringify({
      event: "increment",
    }))
  }

  const resetCounter = async () => {
    Haptics.impactAsync()
    setCounter(0)

    ws.send(JSON.stringify({
      event: "reset",
    }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
        {show ? <Counter clicks={counter} onClick={updateCounter}/> : <Text style={styles.loading}>Loading...</Text>}
      {show && <ResetButton onClick={resetCounter}/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontWeight: 'bold',
    color:'white',
    fontSize:40,
    marginVertical: 20
  },
  loading: {
    fontWeight: 'medium',
    color: 'black',
    fontSize: 20,
    marginVertical: 50
  },
});

export default App
