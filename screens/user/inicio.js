import React from 'react'
import { View,Text,StyleSheet,TextInput,FlatList,TouchableOpacity} from 'react-native'
import ButtonLong from '../../components/buttonLong'


const Inicio = ({ navigation, route })=>{
    
    const handleSelectedLogin = () => {
        navigation.navigate('Login');
      }
      const handleSelectedRegister = () => {
        navigation.navigate('Register');
      }
    return(
        <View style={styles.conteiner}>
          
          <ButtonLong text={"Inicio Sesión"} handleSelected={handleSelectedLogin}></ButtonLong>
          <ButtonLong text={"Registrarme"} handleSelected={handleSelectedRegister}></ButtonLong>
  
    </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%",
        backgroundColor:"#FB6D01",
        justifyContent:'center',
        alignItems:'center',
        },

})

export default Inicio