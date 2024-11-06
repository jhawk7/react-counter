import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const ResetButton = ({onClick}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.text}>RESET</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: '#ff1f4c',
    padding:50,
    margin:50,
    width:'100%',
    borderRadius:100,
    alignItems:'center'
  },
  text:{
    fontWeight:'bold', 
    color:'white', 
    fontSize:20
  }
});

export default ResetButton