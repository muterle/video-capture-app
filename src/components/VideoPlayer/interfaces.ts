export interface VideoPlayerProps {
  videoUri: string | undefined;
  setVideo: (videoUri: string | undefined) => void;
}

export interface ActionProps {
  setVideo: (videoUri: string | undefined) => void;
  videoUri?: string;
}
