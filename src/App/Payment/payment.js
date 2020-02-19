import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class payment extends Component {
  render() {
    return (
      <WebView
        source={{
          uri:
            'https://app.sandbox.midtrans.com/snap/v2/vtweb/c2a7d99e-b8d7-4998-8299-2763e217b210'
        }}
      />
    );
  }
}

export default payment;
