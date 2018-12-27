import React, { Component } from "react";
import { Text, View } from "react-native";

class AppView extends Component {
  render() {
    if (this.props.center) {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: this.props.singleFlex ? 1 : this.props.flex,
            ...this.props.style
          }}
        >
          {this.props.children}
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: this.props.singleFlex ? 1 : this.props.flex,
            ...this.props.style
          }}
        >
          {this.props.children}
        </View>
      );
    }
  }
}

export default AppView;
