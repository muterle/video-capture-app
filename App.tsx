import { useEffect, useState, useRef } from "react";
import { Text } from "react-native";

import { Camera, CameraRecordingOptions, CameraView } from "expo-camera";

import * as MediaLibrary from "expo-media-library";

import CameraViewComponent from "./src/components/CameraView";
import VideoPlayerComponent from "./src/components/VideoPlayer";

export default function App() {
  const cameraRef = useRef<CameraView>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState<string | undefined>(undefined);

  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(false);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.granted);
      setHasMicrophonePermission(microphonePermission.granted);
      setHasMediaLibraryPermission(mediaLibraryPermission.granted);
    })();
  }, []);

  if (!hasCameraPermission || !hasMicrophonePermission) {
    return <Text>Permission of the camera or microphone not granted</Text>;
  }

  if (!hasMediaLibraryPermission) {
    return <Text>Permission of the media library not granted</Text>;
  }

  const recordVideo = () => {
    setIsRecording(true);

    const options: CameraRecordingOptions = {
      maxDuration: 60000,
    };

    if (cameraRef && cameraRef.current) {
      cameraRef.current.recordAsync(options).then((video: any) => {
        setVideo(video.uri);
        setIsRecording(false);
      });
    }
  };

  const stopRecording = () => {
    setIsRecording(false);

    if (cameraRef && cameraRef.current) {
      cameraRef.current.stopRecording();
    }
  };

  if (video) {
    return <VideoPlayerComponent videoUri={video} setVideo={setVideo} />;
  }

  return (
    <CameraViewComponent
      cameraRef={cameraRef}
      isRecording={isRecording}
      onRecordVideo={recordVideo}
      onStopRecording={stopRecording}
    />
  );
}
