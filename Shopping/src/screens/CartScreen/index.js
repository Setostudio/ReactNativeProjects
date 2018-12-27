import React, { Component } from "react";
import { View, TouchableOpacity, FlatList, Image } from "react-native";

import { connect } from "react-redux";
import getLayout from "../../helpers/getLayout";

import AppText from "../../components/basic/AppText";
import AppButton from "../../components/basic/AppButton";
import AppHeader from "../../components/basic/AppHeader";
import AppView from "../../components/basic/AppView";

import StarRating from "react-native-star-rating";
import appColor from "../../commonTheme";

import screenNames from "../screenNames";

import { increaseQuantity, decreaseQuantity } from "../../actions";
class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUpdate(newProps) {
    console.log("Updating");
    console.log(newProps);
  }

  componentDidUpdate() {
    console.log("Updated");
    console.log(this.props.listProduct);
  }
  _keyExtractor = item => item.productId;

  _renderItem = ({ item, index }) => (
    <View>
      <Image
        source={{ uri: item.productImg }}
        style={{ width: getLayout.width - 40, height: 200 }}
        resizeMode="contain"
      />

      <AppView center>
        <AppText>{item.productName}</AppText>
        <AppText>{item.productQuantity}</AppText>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={item.productRating}
          starSize={25}
          fullStarColor={appColor.primaryColor}
          halfStarColor={appColor.primaryColor}
        />
      </AppView>
      <TouchableOpacity
        onPress={() => {
          this.props._increaseQuantity(index, { ...this.props.listProduct });
        }}
      >
        <AppView center>
          <AppText>Increase</AppText>
        </AppView>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          this.props._decreaseQuantity(index, { ...this.props.listProduct });
        }}
      >
        <AppView center>
          <AppText>Decrease</AppText>
        </AppView>
      </TouchableOpacity>
    </View>
  );
  render() {
    return (
      <View>
        <AppHeader />
        <FlatList
          data={this.props.listProduct}
          extraData={this.props}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
mapStateToProps = state => {
  return {
    listProduct: state.listProduct
  };
};
mapDispatchToProps = dispatch => ({
  _increaseQuantity: (index, item) => dispatch(increaseQuantity(index, item)),
  _decreaseQuantity: (index, item) => dispatch(decreaseQuantity(index, item))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartScreen);
