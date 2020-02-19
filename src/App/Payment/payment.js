import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import toast from '../../Public/Component/Toast';

class payment extends Component {
  state = {
    url: this.props.navigation.state.params.url
  };

  _onNavigationStateChange(webViewState) {
    console.log(webViewState.url);
    const { url } = webViewState;
    if (url.includes('?status_code=200')) {
      toast('Payment success !');
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    const { url } = this.state;
    return (
      <WebView
        source={{
          uri: url
        }}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
      />
    );
  }
}

export default payment;
