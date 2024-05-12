import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";

import { Audio, Video } from "expo-av";

import { VideoPlayerProps } from "./interfaces";
import { styles } from "./styles";
import { discardVideo, saveVideo, shareVideo } from "./actions";

const VideoPlayerComponent = ({ videoUri, setVideo }: VideoPlayerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Video
        style={styles.video}
        source={{ uri: `${videoUri}` }}
        useNativeControls
        isLooping
      />
      <View style={styles.menuButton}>
        <Button
          title="Share"
          onPress={() => shareVideo({ videoUri, setVideo })}
        />
        <Button
          title="Save"
          onPress={() => saveVideo({ videoUri, setVideo })}
        />
        <Button title="Discard" onPress={() => discardVideo({ setVideo })} />
      </View>
    </SafeAreaView>
  );
};

export default VideoPlayerComponent;
