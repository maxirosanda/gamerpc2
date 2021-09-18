import React from 'react'
import { View,Text,StyleSheet,TextInput,FlatList,TouchableOpacity} from 'react-native'
import Circle from './circle'
import { useSelector, useDispatch } from 'react-redux';
import ButtonLong from './buttonLong';

const Game = ({ navigation, route })=>{
    const games = useSelector(state => state.games.list)
    return(
        <View style={styles.conteiner}>
        <TextInput style={styles.search}  placeholder="    Buscar" />
            <FlatList style={styles.circles} numColumns={3}  data={games} keyExtractor={item => item.id} renderItem={(data) => (
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
    },
    contendorBotonLargo:{
        margin:10,
        backgroundColor:"#000000",
        height:50,
        borderRadius:5
    },
    textBotonLargo:{
        fontSize:16,
        textAlign:"center",
        color:"#ffffff",
        textAlignVertical:"center",
        height:50,
    },
})

export default Game