import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const Cuadrado = ({handleSelected})=>{
    
    return(
        <TouchableOpacity style={styles.cuadrado} onPress={handleSelected}></TouchableOpacity>

    )
}

const styles= StyleSheet.create({
    cuadrado:{
        width:120,
        flexGrow:1,
        height:120,
        margin:20,
        borderRadius:8,
        backgroundColor:"#FB6D01",
    },
})

export default Cuadrado