import React from 'react';
import {View,SafeAreaView, Text, StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

import Colors from '../../constants/Colors';

const SplashScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          style={styles.logo}
          source={require('../../assets/images/logo4.png')}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Stay Connected with Everyone</Text>
        <Text style={styles.text}>Sign In with Valid Phone Number...!</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signin')}>
            <LinearGradient
              colors={['#1FC244', '#38AC35']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#FFF" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};


export default SplashScreen;


const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.acient,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: Colors.acient,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginVertical: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});


