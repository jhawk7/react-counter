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
    backgroundColor: '#e3d311', //'#e47564',
    padding:50,
    margin:50,
    width:'100%',
    borderRadius:100,
    alignItems:'center'
  },
  text:{
    fontWeight:'bold', 
    color:'black', 
    fontSize:20
  }
});

export default ResetButton