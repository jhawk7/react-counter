import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const ResetButton = ({onClick}) => {

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.text}>RESET</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
      backgroundColor:'#e47564',
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

export default ResetButton