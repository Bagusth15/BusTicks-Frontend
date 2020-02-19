import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class payment extends Component {
  state = {
    url: this.props.navigation.state.params.url
  };

  handleWebViewNavigationStateChange = newNavState => {
    console.log(newNavState);
  };

  render() {
    const { url } = this.state;
    return (
      <WebView
        source={{
          uri: url
        }}
        onNavigateChange={this.handleWebViewNavigationStateChange()}
      />
    );
  }
}

export default payment;
