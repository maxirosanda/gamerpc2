import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import PlaceItem from '../../components/PlaceItem';

import { loadMisPcs } from '../../store/actions/misPcs.actions';

const MisPcs = ({ navigation }) => {
    const dispatch = useDispatch();
    const mispcs = useSelector(state => state.mispcs.misPcs);
    


    useEffect(() => {
        dispatch(loadMisPcs());
    }, []);

    const renderItem = (data) => (
        <PlaceItem
            title={data.item.title}
            image={data.item.image}
            description={data.item.description}
            onSelect={() => navigation.navigate('Detalle')}
        />
    )

    return (
        <FlatList
            data={mispcs}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}

export default MisPcs
