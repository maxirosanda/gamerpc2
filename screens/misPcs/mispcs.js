import React, { useEffect } from 'react'
import { FlatList,StyleSheet,View,Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import PlaceItem from '../../components/PlaceItem';
import { FAB } from 'react-native-paper';
import { deletePC, loadMisPcs } from '../../store/actions/misPcs.actions';

const MisPcs = ({ navigation }) => {
    const dispatch = useDispatch();
    const mispcs = useSelector(state => state.mispcs.misPcs);
    
    const handleDelete = (id) => {
        dispatch(deletePC(id));
       navigation.navigate('Mispcs');
    }

    useEffect(() => {
        dispatch(loadMisPcs());
    }, [ mispcs]);

    const renderItem = (data) => (
        <PlaceItem
            id={data.item.id}
            title={data.item.title}
            image={data.item.image}
            description={data.item.description}
            onSelect={() => navigation.navigate('Detalle')}
            handleDelete= {handleDelete}
        />
    )

    if(mispcs.length == 0){
        return (
            <View>

           <Text style={styles.nohay}>No hay pcs</Text>

           <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={() => navigation.navigate('New Pc')}
      />

      </View>

    )
    }else{
    
    return(
        <View style={styles.container}>
        <FlatList
        data={mispcs}
        keyExtractor={item => item.id}
        renderItem={renderItem}
    />

       <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('New Pc')}
  />

  </View>
    )
}

}
const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
    nohay:{
        paddingTop:100
    },
    container:{
        width:"100%",
        height:"100%"
    }
  })

export default MisPcs
