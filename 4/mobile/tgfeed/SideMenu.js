import React, { useState, useRef } from 'react';
import { Animated, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import styles from './styles';

const SideMenu = ({ folders, setChannelName }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuWidth = useRef(new Animated.Value(0)).current; 

  function onSelectFolder(channel_id) {
    console.log(channel_id);
    setChannelName(channel_id);
    toggleMenu();
  }

  const toggleMenu = () => {
    const finalValue = menuOpen ? 0 : 250;

    Animated.timing(menuWidth, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false, 
    }).start();

    setMenuOpen(!menuOpen);
  };

  const toggleSubfolders = () => {
    Animated.timing(height, {
      toValue: isExpanded ? 0 : subfolders.length * 40, 
      duration: 300,
      useNativeDriver: false, 
    }).start();

    setIsExpanded(!isExpanded);
  };


  return (
    <View style={styles.sidePanelView}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.buttonText}>{menuOpen ? 'Close' : 'Menu'}</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.sideMenuContainer, { width: menuWidth, height: 1000 }]}>
        {folders.map(folder => (
          <TouchableOpacity key={folder.id} onPress={() => onSelectFolder(folder.channel)} style={styles.folder}>
            <Text style={styles.folderText}>{folder.name}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
};

export default SideMenu;
