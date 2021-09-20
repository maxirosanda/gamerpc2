import React,{useEffect} from 'react'
import { View,Text,StyleSheet, TouchableOpacity,FlatList} from 'react-native'
import CardBig from './cardBig';
import { useSelector ,useDispatch} from 'react-redux';
import { getOrdersUser } from '../store/actions/orders.action';

const OrdersUser = ()=>{
    
    const dispatch = useDispatch();
  
    useEffect(()=>{
        dispatch(getOrdersUser())
    },[])
    
    const orders = useSelector(state => state.orders.list)
    console.log(orders)
    return(
        <View style={styles.conteiner}>

            <FlatList
                 data={orders}
                 renderItem={(data) => (
                    
                   <CardBig component={data.items.components}/>
                  
                    )}
                 keyExtractor={component => component.id}
             />
    </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        },
        bar:{
            flexDirection:"row",
            backgroundColor:"#FB6D01",
            
        },
        barButton:{
            width:"33.3%",
            padding:15,
            flexGrow:1
        },
        bartext:{
            textAlign:"center",
            color:"#ffffff"
        },
        active:{
            width:"33.3%",
            padding:15,
            flexGrow:1,
            borderBottomWidth:5,
            borderColor:"#ffffff"
        },
        activetext:{
            textAlign:"center",
            color:"#ffffff",
            fontWeight:"bold"
        },
        cardbig:{
            flexGrow:1,

        }
})

export default OrdersUser