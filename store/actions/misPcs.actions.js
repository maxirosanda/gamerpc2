import * as FileSystem from 'expo-file-system';
import { insertMiPc, fetchMispcs } from '../../db';

export const ADD_MIPC = 'ADD_MIPC';
export const LOAD_MISPCS = 'LOAD_MISPCS';

export const addmiPc = (title, image,description) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName;

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path,
            })

            const result = await insertMiPc(
                title,
                Path,
                description
            );

            dispatch({
                type: ADD_MIPC,
                payload: {
                    id: result.insertId,
                    title,
                    image: Path,
                    description
                }
            });
        } catch (err) {
            console.log(err.message);
            throw err;
        }

        
    }
}

export const loadMisPcs = () => {
    return async dispatch => {
        try {
            const result = await fetchMispcs();
            dispatch({ type:LOAD_MISPCS, misPcs: result.rows._array })
        } catch (error) {
            throw error;
        }
    }
}