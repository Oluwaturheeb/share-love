import React, { useEffect, useRef, useState } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { FAB } from 'react-native-paper';
import { useCameraDevices, Camera, useFrameProcessor } from 'react-native-vision-camera';

const CameraView = () => {
  const [photo, setPhoto] = useState(true);
  const [video, setVideo] = useState(true);
  const camera = useRef(Camera);

  // get permission
  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermission();
      await Camera.getMicrophonePermissionStatus();
    })();
  }, []);

  const cam = useCameraDevices();
  const device = cam.front;

  if (!device) return null;

  return (
    <>
      <Camera
        device={device}
        style={{ flex: 1 }}
        isActive={true}
        ref={camera}
        photo={photo}
        frameProcessor={() => useFrameProcessor(frame => {
          'worklet'
          console.log(frame)
        })}
      // video={video}
      />
      <TouchableNativeFeedback onPress={async() => console.log(await camera.current.takeSnapshot({ quality: 100, skipMetadata: false }))} >
      <FAB></FAB>
      </TouchableNativeFeedback>
    </>
  )

}
export default CameraView;