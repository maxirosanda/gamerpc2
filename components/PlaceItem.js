import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { COLORS } from '../constants/colors';

  
const PlaceItem = ({id,title, image,description,onSelect,handleDelete }) => {
  return (
    <View style={styles.placeItem}>
      <TouchableOpacity style={styles.touch}  onPress={onSelect}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{description}</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contendorBotonChico} onPress={()=>{handleDelete(id)}}>
      <Text style={styles.textBotonChico} >Borrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  touch:{
    flexDirection:"row",
    flex:2
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.primary,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: COLORS.primary,
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: '#777',
    fontSize: 16,
  },
  contendorBotonChico:{
    margin:10,
    backgroundColor:COLORS.primary,
    height:50,
    borderRadius:5,
    flex:1
},
textBotonChico:{
    fontSize:16,
    textAlign:"center",
    color:"#ffffff",
    textAlignVertical:"center",
    height:50,
},
});

export default PlaceItem;