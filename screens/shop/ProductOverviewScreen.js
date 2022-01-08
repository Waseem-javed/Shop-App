import React,{useEffect} from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector,useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';

const ProductOverviewScreen = props => {
  const { navigation } = props;
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          name="cart-outline"
          color="white"
          backgroundColor={Colors.acient}
          onPress={() => navigation.navigate('Cart')}
        />
      ),
    });
  })

    return (
      <View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <ProductItem
              image={itemData.item.imageUrl}
              title={itemData.item.title}
              price={itemData.item.price}r
              onViewDetail={() => {
                  props.navigation.navigate('ProductDetail', {
                  productId: itemData.item.id,
                  productTitle: itemData.item.title,
                });
              }}
              onAddToCart={()=>dispatch(cartActions.addToCart(itemData.item))}
            />
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({

});

export default ProductOverviewScreen;
