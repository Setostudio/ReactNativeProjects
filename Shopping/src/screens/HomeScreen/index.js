import React, { Component } from "react";
import { View } from "react-native";

import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import AppHeader from "../../components/AppHeader";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <AppHeader />
      </View>
    );
  }
}

export default HomeScreen;
