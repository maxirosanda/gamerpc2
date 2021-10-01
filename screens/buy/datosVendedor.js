import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity,FlatList} from 'react-native'
import { useSelector} from 'react-redux';
import ButtonsBotton from '../../components/buttonsbotton';
import Avatar2 from '../../components/avatar';

const DatosVendedor = ({ navigation, route })=>{
    const products = useSelector(state => state.products.list)
    const selectedId = useSelector(state =>state.products.selectedId)
    const product = products.find(item => item.id === selectedId);
    const userId = useSelector(state => state.auth.userId);


/* <ButtonLong text={"CHAT CON EL VENDEDOR"} handleSelected={()=>{}}></ButtonLong> */
    return(
        <View style={styles.conteiner}>
            <View style={styles.photo}></View>
             <Avatar2 title = "Mariano Herrera" alias='mariano_computer' />
        <ButtonsBotton product={product} userId={userId} ></ButtonsBotton>
        
        </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        },
       photo:{
        flexGrow:1,
        height:100,
        backgroundColor:"#FB6D01",
       }
})

export default DatosVendedor