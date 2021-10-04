import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mispcs.db');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS mispcs (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          image TEXT NOT NULL,
          description TEXT NOT NULL
        )`,
        [],
        () => resolve(),
        (_, err) => reject(err),
      )
    });
  });
}

export const insertMiPc = (
  title,
  image,
  description
) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO mispcs (title, image, description) VALUES (?, ?, ?)',
        [title, image,description],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}

export const fetchMispcs = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM mispcs',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}


export const deleteAddress = (
  id
) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM mispcs WHERE id = ?',
        [id],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}