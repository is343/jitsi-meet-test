import React from 'react';
import { View } from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

class VideoCall extends React.Component {
  constructor(props) {
    super(props);
    this.onConferenceTerminated = this.onConferenceTerminated.bind(this);
    this.onConferenceJoined = this.onConferenceJoined.bind(this);
    this.onConferenceWillJoin = this.onConferenceWillJoin.bind(this);
  }

  componentDidMount() {
    console.warn('JitsiMeet', JitsiMeet);
    setTimeout(() => {
      // const url = self.props.navigation.getParam('url');
      const url = 'https://meet.jit.si/atlastest';
      const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      // JitsiMeet.initialize();
      // JitsiMeet.call(url, userInfo);
      JitsiMeet.audioCall(url);
      /* You can also use JitsiMeet.audioCall(url) for audio only call */
      /* You can programmatically end the call with JitsiMeet.endCall() */
    }, 1000);
  }

  componentWillUnmount() {
    JitsiMeet.endCall();
  }

  onConferenceTerminated(nativeEvent) {
    console.warn('onConferenceTerminated', nativeEvent);
    /* Conference terminated event */
  }

  onConferenceJoined(nativeEvent) {
    console.warn('onConferenceJoined', nativeEvent);
    /* Conference joined event */
  }

  onConferenceWillJoin(nativeEvent) {
    console.warn('onConferenceWillJoin', nativeEvent);
    /* Conference will join event */
  }

  renderView = () => {
    return (
      <JitsiMeetView
        onConferenceTerminated={this.onConferenceTerminated}
        onConferenceJoined={this.onConferenceJoined}
        onConferenceWillJoin={this.onConferenceWillJoin}
        style={{ flex: 1, height: '100%', width: '100%' }}
      />
    );
  };

  render() {
    return (
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        {this.renderView()}
      </View>
    );
  }
}

export default VideoCall;
