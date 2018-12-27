import React, { Component } from "react";
import { View } from "react-native";

import appColor from "../../commonTheme";
class AppButton extends Component {
  render() {
    return (
      <View
        style={{
          borderRadius: 10,
          backgroundColor: this.props.primary
            ? appColor.primaryColor
            : appColor.complementaryColor,
          alignItems: "center",
          justifyContent: "center",
          ...this.props.style
        }}
        {...this.props}
      >
        <View style={{ padding: 10 }}>{this.props.children}</View>
      </View>
    );
  }
}

export default AppButton;
