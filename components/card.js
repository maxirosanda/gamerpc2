import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Rectangulo from './rectangulo'

const Card = ({item})=>{
    
    return(
        <>
        <TouchableOpacity style={styles.card}>
            <Rectangulo/>
            <Text style={styles.titulo}>{item.title}</Text>
            <Text style={styles.mas}>+</Text> 
        </TouchableOpacity>
        </>
    )
}

const styles= StyleSheet.create({
    titulo:{
        fontWeight:"bold"
    },
    card:{
        height:120,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        margin:15,
        borderRadius:10,
        elevation:2
    },
    mas:{
        fontSize:35,
        margin:15
    }
})

export default Card