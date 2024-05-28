import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Dimensions, PixelRatio, Image  } from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import styles from './styles'; 
import HTMLView from 'react-native-htmlview';

var {height, width} = Dimensions.get('window');

const RssReader = ({ channelName }) => {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(channelName);
    loadFeed(channelName);
  }, [channelName]);

  const loadFeed = async (channelName) => {
    if (!channelName) return;

    let url = "https://rsshub.app/telegram/channel/"+channelName+"/showLinkPreview=0&showViaBot=0&showReplyTo=0&showFwdFrom=0&showFwdFromAuthor=0&showInlineButtons=0&showMediaTagInTitle=1&showMediaTagAsEmoji=1&includeFwd=0&includeReply=1&includeServiceMsg=0&includeUnsupportedMsg=0"

    try {
      let response = await fetch(url);
      let responseData = await response.text();
      let rssFeed = await rssParser.parse(responseData);
      setFeed(rssFeed);
    } catch (err) {
      setError(err.message);
      console.error('Failed to load RSS feed:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContent}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContent}>
        <Text>Error loading feed: {error}</Text>
      </View>
    );
  }

  function renderNode(node, index, siblings, parent, defaultRenderer) {
    if (node.name == 'img') {
        const { src, height } = node.attribs;
        const imageHeight = 100;
        return (
            <Image
                key={index}
                style={{  height: imageHeight * PixelRatio.get() ,resizeMode:'cover'}}
                source={{ uri: src }}  />
        );
    }
}
  return (
    <View>
        <View style={styles.feedTitle}>
            <Text style={styles.feedTitleText}>{feed.title.replace(" - Telegram Channel", "")}</Text>
        </View>
        <FlatList
        data={feed.items}
        keyExtractor={(item, index) => 'feed-item-' + index}
        renderItem={({ item }) => (
            <View style={styles.htmlContentContainer}>
            <Text style={styles.feedItemTitle}>{item.title}</Text>

            <HTMLView
                value={item.description}
                stylesheet={htmlStyles}
                renderNode={renderNode}
            />

            </View>
        )}
        />
    </View>
  );
};

const htmlStyles = StyleSheet.create({
    img: {
        width: "30% !important",
        height: "auto !important"
    }
  });
  

export default RssReader;
