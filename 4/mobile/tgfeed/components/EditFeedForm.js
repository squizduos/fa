// EditFeedForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import styles from '../styles';

const EditFeedForm = ({ feed, onUpdateFeed }) => {
  const [url, setUrl] = useState(feed.url);

  const handleSubmit = () => {
    if (url) {
      onUpdateFeed(feed.id, url);
      // Perhaps navigate back to the feed folder's page
    } else {
      alert('Please enter a valid RSS feed URL.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Update RSS feed URL"
        value={url}
        onChangeText={setUrl}
      />
      <Button title="Update Feed" onPress={handleSubmit} />
    </View>
  );
};

export default EditFeedForm;
