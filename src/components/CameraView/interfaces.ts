import { CameraView } from "expo-camera";

export interface CameraViewProps {
  cameraRef: React.RefObject<CameraView>;
  isRecording: boolean;
  onRecordVideo: () => void;
  onStopRecording: () => void;
}
