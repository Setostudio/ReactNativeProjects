import React, { Component } from "react";
import { Text, View } from "react-native";

class AppText extends Component {
  render() {
    return (
      <Text
        style={{
          fontFamily: this.props.medium
            ? "OpenSans-Medium"
            : "OpenSans-Regular",
          fontSize: this.props.fontSize,
          color: this.props.fullWhite ? "white" : "black",
          ...this.props.style
        }}
      >
        {this.props.children}
      </Text>
    );
  }
}

export default AppText;
