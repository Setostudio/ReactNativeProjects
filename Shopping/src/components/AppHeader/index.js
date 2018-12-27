import React, { Component } from "react";
import { View } from "react-native";

import AppText from "../AppText";

import getLayout from "../../helpers/getLayout";
import appColor from "../../commonTheme";
class AppHeader extends Component {
  render() {
    return (
      <View
        style={{
          width: getLayout.width,
          height: getLayout.height / 11,
          backgroundColor: appColor.primaryColor
        }}
      />
    );
  }
}

export default AppHeader;
