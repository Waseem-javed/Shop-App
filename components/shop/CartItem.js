import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Badge } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Colors from '../../constants/Colors';
const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Badge style={styles.badge} success>
          <Text style={styles.quantity}>{props.quantity}</Text>
        </Badge>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
        {props.deletable && (
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}>
            <Icon name="trash" size={20} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.acient
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    marginHorizontal:2,
  },
  quantity: {
    fontFamily: 'OpenSans',
    color: Colors.white,
    fontSize: 16,
    marginHorizontal: 4,
  },
  mainText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  amount: {},
  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;
