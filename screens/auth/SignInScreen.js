import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,Alert,TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

import TextInputField from '../../components/TextInput';
import Colors from '../../constants/Colors';

const SignInScreen = props => {

  const [phoneNumber, setPhoneNumber] = useState();

  // when user enter a number the do some process
  const signInHandler = () => {
    if (!phoneNumber) {
      Alert.alert('Number Field Empty..?', 'Please Enter a Valid Phone Number');
    } else if (!phoneNumber) {
      Alert.alert('Number Field Empty..?', 'Enter InValid Phone Number');
    } else {
      if (phoneNumber) {
        console.log(typeof phoneNumber);
        props.navigation.navigate('verfiyOtp');
      } else {
        Alert.alert('Invalid Number...?', 'Enter Valid Phone Number');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Animatable.Text animation="zoomIn" style={styles.text_header}>Welcome..!</Animatable.Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.footerFirstRow}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <Animatable.Text animation="bounce" duration={1000} style={styles.signInText}>Sign In</Animatable.Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInputField
            keyboardType={'phone-pad'}
            placeholder="3489623573"
            placeholderTextColor="green"
            maxLength={10}
            onChange={(num) => setPhoneNumber(num)}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={signInHandler}>
            <LinearGradient
              colors={['#1FC244', '#38AC35']}
              style={styles.signIn}>
              <Text style={styles.textSign}>SIGN IN</Text>
              <MaterialIcons name="navigate-next" color="#FFF" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};


export default SignInScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.acient,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
        color: '#fff',
        fontWeight: 'bold',
    fontSize: 30,
        textAlign:'center'
    },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  footerFirstRow: {
    width:'80%',
    height:Platform.OS ==='android' ? 120:100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
  },
  signInText: {
    color: Colors.acient,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  signIn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
});
