import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { connect } from "react-redux";
import getLayout from "../../helpers/getLayout";

import AppText from "../../components/basic/AppText";
import AppButton from "../../components/basic/AppButton";
import AppHeader from "../../components/basic/AppHeader";
import AppView from "../../components/basic/AppView";

import StarRating from "react-native-star-rating";
import appColor from "../../commonTheme";

import { addProductId } from "../../actions";
import screenNames from "../screenNames";
class ViewProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log(this.props.selectedProduct);
  }
  render() {
    let {
      productId,
      productImg,
      productName,
      productPrice,
      productRating
    } = this.props.selectedProduct;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log(this.props.listSelectedId);
          }}
        >
          <AppText>Hi</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props._addProductId(productId, this.props.listSelectedId);
            this.props.navigation.navigate(screenNames.CartScreen);
          }}
        >
          <Image
            source={{ uri: productImg }}
            style={{ width: getLayout.width - 40, height: 200 }}
            resizeMode="contain"
          />

          <AppView center>
            <AppText>{productName}</AppText>
            <AppText>{productPrice}</AppText>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={productRating}
              starSize={25}
              fullStarColor={appColor.primaryColor}
              halfStarColor={appColor.primaryColor}
            />
          </AppView>
        </TouchableOpacity>
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    selectedProduct: state.selectedProduct,
    listSelectedId: state.listSelectedId
  };
};
mapDispatchToProps = dispatch => ({
  _addProductId: (item, listId) => dispatch(addProductId(item, listId))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProductScreen);
