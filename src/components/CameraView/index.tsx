import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { CameraViewProps } from "./interfaces";
import { styles } from "./styles";
import { CameraView } from "expo-camera";

const CameraViewComponent = ({
  cameraRef,
  isRecording,
  onRecordVideo,
  onStopRecording,
}: CameraViewProps) => {
  return (
    <CameraView mode="video" style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonRecord}
          onPress={isRecording ? onStopRecording : onRecordVideo}
        >
          <Text style={styles.buttonText}>
            {isRecording ? "Stop Recording" : "Start Record"}
          </Text>
        </TouchableOpacity>
      </View>
    </CameraView>
  );
};

export default CameraViewComponent;
