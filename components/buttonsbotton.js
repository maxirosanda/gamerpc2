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



export default ButtonsBotton