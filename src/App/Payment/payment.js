import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class payment extends Component {
  render() {
    return (
      <WebView
        source={{
          uri:
            'https://app.sandbox.midtrans.com/snap/v2/vtweb/dc5eefd4-9823-420c-a23a-40c9e91979d4'
        }}
      />
    );
  }
}

export default payment;
