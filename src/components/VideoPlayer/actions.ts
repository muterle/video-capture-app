import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { ActionProps } from "./interfaces";

export const shareVideo = ({ videoUri, setVideo }: ActionProps) => {
  shareAsync(`${videoUri}`)
    .then(() => setVideo(undefined))
    .catch((error) => console.log(error));
};

export const saveVideo = ({ videoUri, setVideo }: ActionProps) => {
  MediaLibrary.saveToLibraryAsync(`${videoUri}`).then(() =>
    setVideo(undefined)
  );
};

export const discardVideo = ({ setVideo }: ActionProps) => {
  setVideo(undefined);
};
