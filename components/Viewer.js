import React, { useEffect } from 'react';
import { NodePlayerView } from 'react-native-nodemediaclient';
import { View } from 'react-native';

const Viewer = () => {
  return (
    <View>
      <NodePlayerView
        style={{ height: 220 }}
        ref={(vp) => { this.vp = vp }}
        inputUrl={"rtmp://localhost:1935/live/TESTING"}
        scaleMode={"ScaleAspectFit"}
        bufferTime={300}
        maxBufferTime={1000}
        autoplay={true}
        onStatus={(code, msg) => console.log(code, msg)}
      />
    </View>
  )
}
export default Viewer;