import {useState, useEffect} from 'react';
import RNFS from 'react-native-fs';

export default function useFileHandler() {
  const [documentsFolder, setDocumentsFolder] = useState('');
  useEffect(() => {
    //get user's file paths from react-native-fs
    setDocumentsFolder(RNFS.DocumentDirectoryPath);
  }, []);

  const createFile = async (value, dateString) => {
    let name = '/fahrtenbuch' + dateString + '.csv';
    var path = documentsFolder + name;
    RNFS.writeFile(path, value, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
      })
      .catch(err => {
        console.error(err.message);
      });
  };

  return {createFile};
}
