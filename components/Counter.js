import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

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
      backgroundColor: '#4786df', //'#3F51B5',
      padding:100,
      margin:20,
      marginTop: 50,
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

export default Clicker