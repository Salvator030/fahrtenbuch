import {useState, useEffect} from 'react';
import RNFS from 'react-native-fs';

export default function useFileHandler() {
  const [documentsFolder, setDocumentsFolder] = useState('');
  useEffect(() => {
    //get user's file paths from react-native-fs
    setDocumentsFolder(RNFS.DocumentDirectoryPath);
    console.log(documentsFolder);
  }, []);

  const createFile = async value => {
    let name = '/testTestttsddd.csv';
    var path = documentsFolder + name;

    RNFS.writeFile(path, value, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
      })
      .catch(err => {
        console.error(err.message);
      });
    // i = -1;
    // }
    // }
  };

  // create a path you want to write to
  // :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
  // but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
  //

  // write the file
  //RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
  //  .then((success) => {
  //   console.log('FILE WRITTEN!');
  // })
  // .catch((err) => {
  //  console.log(err.message);
  //});

  return {createFile};
}
