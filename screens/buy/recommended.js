import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity,FlatList} from 'react-native'
import CardBig from '../../components/cardBig';
import ButtonLong from '../../components/buttonLong';
import { useSelector} from 'react-redux';

const Recommended = ({ navigation, route })=>{
    const products = useSelector(state => state.products.list)
    const selectedId = useSelector(state =>state.products.selectedId)
    const product = products.find(item => item.id === selectedId);

   
    return(
        <View style={styles.conteiner}>

            <FlatList
                 data={product.components}
                 renderItem={(data) => (
                     
                   <CardBig component={data}/>
                  
                    )}
                 keyExtractor={component => component.id}
             />
         <ButtonLong text={"CHAT CON EL VENDEDOR"} handleSelected={()=>{}}></ButtonLong>
         <ButtonLong text={"VOLVER A LA HOME"} handleSelected={()=>{}}></ButtonLong>
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

export default Recommended