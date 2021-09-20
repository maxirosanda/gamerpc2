import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { useDispatch} from 'react-redux';
import { confirOrder } from '../store/actions/orders.action';
import ButtonLong from './buttonLong';

const ButtonsBotton = ({product,userId})=>{

    const dispatch = useDispatch();

    const handlerAddItemOrder = () => {
        dispatch(confirOrder(product,userId));
      }
    return(
        <View>
                <ButtonLong text={"COMPRAR"} handleSelected={handlerAddItemOrder}></ButtonLong>  
         
                <ButtonLong text={"VOLVER A LA HOME"} handleSelected={()=>{}}></ButtonLong>
        </View>
    )
}

const styles= StyleSheet.create({
    circle:{
        backgroundColor:"#FB6D01",
        flexGrow:1,
        flexDirection:"row",
        width:100,
        maxWidth:100,
        height:100,
        margin:8,
        borderRadius:50,
        alignContent:"center",
        },
        text:{
            textAlign:"center",
            textAlignVertical:"center",
            marginBottom:8,
        }
})

export default ButtonsBotton