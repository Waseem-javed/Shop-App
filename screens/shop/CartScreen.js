import React,{useEffect} from 'react';
import { FlatList,View, Button,Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector,useDispatch } from 'react-redux';

import * as cartActions from '../../store/actions/cart';
import CartItem from '../../components/shop/CartItem';

import Colors from '../../constants/Colors';

const CartScreen = ({navigation}) => {
    const cartTotalAmounts = useSelector(state => state.cart.totalAmount);

    const cartItems = useSelector((state) => {
      const transformCartItems = [];
      for (const key in state.cart.items) {
        transformCartItems.push({
          productId: key,
          productTitle: state.cart.items[key].productTitle,
          productPrice: state.cart.items[key].productPrice,
          quantity: state.cart.items[key].quantity,
          sum: state.cart.items[key].sum,
        });
      }
      return transformCartItems.sort((a, b) =>
        a.productId > b.productId ? 1 : -1,
      );
    });

    useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <Icon.Button
              name="arrow-back-outline"
              color="white"
              backgroundColor={Colors.acient}
              onPress={() => navigation.navigate('Products')}
            />
          ),
        });
    })
    const dispatch = useDispatch();
    return (
      <View style={styles.screen}>
        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            Total Amount:
            <Text style={styles.amount}>${cartTotalAmounts.toFixed(2)}</Text>
          </Text>
          <Button
            title="Order Now"
            color={Colors.primary}
            onPress={() =>
              dispatch(orderActions.addOrder(cartItems, cartTotalAmounts))
            }
            disabled={cartItems.length === 0}
          />
        </View>
        <View>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.productId}
            renderItem={(itemData) => (
              <CartItem
                quantity={itemData.item.quantity}
                title={itemData.item.productTitle}
                image={itemData.item.imageUrl}
                amount={itemData.item.sum}
                deletable
                onRemove={() =>
                  dispatch(cartActions.removeFromCart(itemData.item.productId))
                }
              />
            )}
          />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    paddingVertical:13,
    // shadowColor: 'black',
    // shadowOpacity: 0.26,
    // shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    // elevation: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  summaryText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});


export default CartScreen;
