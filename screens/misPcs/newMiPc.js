import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'
import { addmiPc } from '../../store/actions/misPcs.actions';
import ImageSelector from '../../components/ImageSelector';
import LocationSelector from '../../components/LocationSelector';


const NewMiPc = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState();
    const [location, setLocation] = useState();

    const handleTitleChange = text => setTitle(text);
    const handleDescriptionChange = text => setDescription(text);
    const handleSave = () => {
        dispatch(addmiPc(title, image,description));
       navigation.navigate('Mispcs');
    }

    const handlePickImage = (uri) => {
        setImage(uri);
    }

    const handlePickLocation = (loc) => {
        setLocation(loc);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}
                />
                <Text style={styles.label}>Descripcion</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={handleDescriptionChange}
                />

                <ImageSelector onImage={handlePickImage} />
                <LocationSelector onLocation={handlePickLocation} />
                <Button
                    title="Guardar PC"
                    color={COLORS.primary}
                    onPress={handleSave}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
})

export default NewMiPc 
