// FolderList.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from '../styles';


// Component to show the list of folders
const FolderList = ({ folders }) => {
  return (
    <View style={styles.container}>
      {folders.map(folder => (
        <Text key={folder.id} style={styles.folderName}>
          {folder.name}
        </Text>
      ))}
    </View>
  );
};


export default FolderList;
