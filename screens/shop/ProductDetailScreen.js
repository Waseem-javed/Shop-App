import React, {useEffect} from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';

const ProductDetailScreen = ({ route, navigation }) => {
  const {productId,productTitle} = route.params;
  const selectedProduct = useSelector((state) =>
    state.products.products.find((prod) => prod.id === productId),
  );
    navigation.setOptions({
      title: productTitle,
      headerLeft: () => (
        <Icon.Button
          name="arrow-back-outline"
          color="white"
          backgroundColor={Colors.acient}
          onPress={() => navigation.navigate('Products')}
        />
      ),
      headerRight: () => (
        <Icon.Button
          name="cart-outline"
          color="white"
          backgroundColor={Colors.acient}
          onPress={() => navigation.navigate('Cart')}
        />
      ),
    });

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => {}}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;
