import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Clicker = ({clicks, onClick}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.text}>{clicks}</Text>
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
    backgroundColor: '#35f076', //'#4786df',
    padding:100,
    margin:20,
    marginTop: 50,
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

export default Clicker