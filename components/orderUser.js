import React,{useEffect} from 'react'
import { View,Text,StyleSheet, TouchableOpacity,FlatList} from 'react-native'
import CardBig from './cardBig';
import { useSelector,useDispatch} from 'react-redux';
import { getOrderUser } from '../store/actions/orders.action';
import ButtonLong from './buttonLong';
import { deleteOrder } from '../store/actions/orders.action';

const OrderUser = ({navigation})=>{
    const dispatch = useDispatch();
    const orderid = useSelector(state => state.orders.selectedId)

  
    useEffect(()=>{
        dispatch(getOrderUser(orderid))
       
    },[])

    
    const handleDeleteOrder = (id) => {
        dispatch(deleteOrder(id))
        navigation.navigate('OrdersUser');
      }

    const order = useSelector(state => state.orders.list)
 
    return(
        <View style={styles.conteiner}>
       <ButtonLong text={"Eliminar Orden"} handleSelected={()=> handleDeleteOrder(orderid)}/>      
             <FlatList

data={Object.values(order)[0].item.components}
renderItem={(data) =>{
 return (
       <View>
     <CardBig component={data}/>
     </View>
       ) 
} }
keyExtractor={component => component.date}

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

export default OrderUser

/*
       <FlatList

                 data={Object.values(orders)}
                 renderItem={(data) => (
                    <View>
                   <TouchableOpacity onPress={()=>{handleSelectedOrder}}> 
                       <Text>Compra N: {data.item.date}</Text>
                    </TouchableOpacity>
                  </View>
                    )}
                 keyExtractor={component => component.id}
             />



                         <FlatList

                 data={Object.values(orders)}
                 renderItem={(data) =>{
                //console.log(data)

                  return (
                        <View>
                      <CardBig component={data.item.item.components}/>
                      </View>
                        ) 
                 } }
                 keyExtractor={component => component.id}
             />
             */