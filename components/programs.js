import React from 'react'
import { View,Text,StyleSheet,TextInput,FlatList,TouchableOpacity} from 'react-native'
import Circle from './circle'
import ButtonLong from './buttonLong';
import { useSelector, useDispatch } from 'react-redux';

const Programs = ({ navigation, route })=>{
    
    const programs = useSelector(state => state.programs.list)

    return(
        <View style={styles.conteiner}>
        <TextInput style={styles.search}  placeholder="    Buscar" />
            <FlatList style={styles.circles}  numColumns={3}  data={programs} keyExtractor={item => item.id} renderItem={(data) => (
                < Circle item={data.item} />  
            )}/> 
            <ButtonLong text={"Ver Opciones de Computadoras"} handleSelected={()=>{}}></ButtonLong>
       
    </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        },
    search:{
        height:50,
        margin:15,
        borderWidth:1,
        borderRadius:5,
        borderColor:"#000000"
    },
    circles:{
    height:100,
    alignContent:"center"
    }
})

export default Programs