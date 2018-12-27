import React, { Component } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import getLayout from "../../helpers/getLayout";

import AppText from "../../components/basic/AppText";
import AppButton from "../../components/basic/AppButton";
import AppHeader from "../../components/basic/AppHeader";
import AppView from "../../components/basic/AppView";
import data from "../../data";

import StarRating from "react-native-star-rating";
import appColor from "../../commonTheme";

import { viewProductAction, toggleQuantity } from "../../actions";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data.listProduct
    };
  }

  _keyExtractor = item => item.productId;

  _renderItem = ({ item, index }) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          this.props._viewProductAction(item);
          this.props.navigation.navigate("ViewProduct");
        }}
      >
        <Image
          source={{ uri: item.productImg }}
          style={{ width: getLayout.width - 40, height: 200 }}
          resizeMode="contain"
        />

        <AppView center>
          <AppText>{item.productName}</AppText>
          <AppText>{item.productPrice}</AppText>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={item.productRating}
            starSize={25}
            fullStarColor={appColor.primaryColor}
            halfStarColor={appColor.primaryColor}
          />
        </AppView>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View>
        <AppHeader />
        <AppButton
          onPress={() => {
            console.log(this.props.listProduct);
          }}
        >
          <AppText>Testing</AppText>
        </AppButton>

        <FlatList
          data={this.props.listProduct}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    listProduct: state.listProduct,
    selectedProduct: state.selectedProduct
  };
};
mapDispatchToProps = dispatch => ({
  _viewProductAction: item => dispatch(viewProductAction(item)),
  _toggleQuantity: (isPlus, index, item) =>
    dispatch(toggleQuantity(isPlus, index, item))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
