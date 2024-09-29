import { useState } from "react"
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Clicker = ({clicks, onClick}) => {

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.text}>{clicks}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
      backgroundColor:'#3F51B5',
      padding:50,
      margin:50,
      width:'100%',
      borderRadius:50,
      alignItems:'center'
  },
  text:{
      fontWeight:'bold', 
      color:'white', 
      fontSize:20
  }
});

export default Clicker