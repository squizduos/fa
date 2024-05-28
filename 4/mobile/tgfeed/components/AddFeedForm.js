// AddFeedForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddFeedForm = ({ onAddFeed }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    if (url) {
      onAddFeed(url);
      setUrl(''); // Reset the text input after submission
    } else {
      alert('Please enter a valid RSS feed URL.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter RSS feed URL"
        value={url}
        onChangeText={setUrl}
      />
      <Button title="Add Feed" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Container styles
  },
  input: {
    // Input field styles
  },
});

export default AddFeedForm;
