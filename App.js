import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clicker from './components/Clicker.js';
import { useState } from 'react';
import * as Haptics from 'expo-haptics';
import { Kafka } from 'kafkajs';

export default function App() {
  const [counter, updateCounter] = useState(0)
  const kafka = new Kafka({
    clientID: "react-counter",
    brokers: ["broker_uri"]
  })
  const producer = kafka.producer();
  const push = async (count) => {
    await producer.connect()
    await producer.send({
      topic: "Counter",
      messages: [
        {key: "count", value: count},
        {key: "ts", value: Date.now()}
      ]
    })
    await producer.disconnect()
  }
  const updateClick = () => {
    updateCounter(counter +1)
    Haptics.impactAsync()
    push(counter)
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
