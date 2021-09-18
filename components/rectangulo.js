import React from 'react'
import { View,StyleSheet} from 'react-native'

const Rectangulo = ()=>{
    
    return(
        <View style={styles.rectangulo}></View>

    )
}

const styles= StyleSheet.create({
    rectangulo:{
        width:80,
        height:50,
        backgroundColor:"#FB6D01",
        borderRadius:8,
        marginLeft:8,
        marginRight:18,
        
      },
})

export default Rectangulo