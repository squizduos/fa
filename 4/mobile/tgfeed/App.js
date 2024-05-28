import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import FeedList from './components/FeedList';
import FolderList from './components/FolderList';
import AddFeedForm from './components/AddFeedForm';
import EditFeedForm from './components/EditFeedForm';
import RssReader from './RssReader';
import styles from './styles';
import SideMenu from './SideMenu';

export default function App() {
  const [folders, setFolders] = useState([
    { id: 'feed1', channel: 'breakingmash', name: "Mash" },
    { id: 'feed2', channel: 'shot_shot', name: "SHOT" },
    { id: 'feed3', channel: 'bbbreaking', name: "Раньше всех. Ну почти." },
    { id: 'feed4', channel: 'netudasmm', name: "Не туда" },
    { id: 'feed5', channel: 'vas3k_channel', name: "Вастрик. Пынь" },
    { id: 'feed6', channel: 'ch_11', name: "Channel 11" },
  ]);

  const [channelName, setChannelName] = useState(folders[0].channel);
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SideMenu folders={folders} setChannelName={setChannelName} />
      </View>
      <View style={styles.mainContent}>
        <RssReader channelName={channelName} />
      </View>
    </SafeAreaView>
  );
}
