import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,TextInput,SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

import { AuthContext } from '../../components/Context';

import Colors from '../../constants/Colors';

const VerfiyOtpScreen = (props) => {
  const [otpNumber, setOtpNumber] = useState();

  const {signIn} = React.useContext(AuthContext);

  // when user enter a number the do some process
  const verifyHandler = () => {
    if (!otpNumber) {
      Alert.alert('Enter Otp Code..?', 'Please Enter a Valid Otp Code');
    } else if (!otpNumber) {
      Alert.alert('Invalid OTP?', 'Enter Valid OTP Code');
    } else {
      if (otpNumber) {
        console.log(typeof phoneNumber);
        props.navigation.navigate('dashbaord');
      } else {
        Alert.alert('Invalid Number...?', 'Enter Valid Phone Number');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Animatable.Text
          animation="bounce"
          duration={1000}
          style={styles.text_header}>
          Welcome!
        </Animatable.Text>
        <Animatable.Text animation="zoomIn" duration={1000} style={styles.text}>
          Enter Your Verfiy OTP Code
        </Animatable.Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.footerFirstRow}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <Text style={styles.signInText}>Verfiy</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType={'phone-pad'}
            placeholder="-  -  -  -"
            placeholderTextColor="green"
            maxLength={4}
            style={styles.input}
            onChangeText={(num) => setOtpNumber(num)}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={()=>signIn()}>
            <LinearGradient
              colors={['#1FC244', '#38AC35']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Confirm</Text>
              <MaterialIcons name="navigate-next" color="#FFF" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default VerfiyOtpScreen;

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
  text: {
    color: '#FFF',
    fontSize: 10,
    marginVertical: 5,
    textAlign: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerFirstRow: {
    width: '80%',
    height: Platform.OS === 'android' ? 120 : 100,
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
  input: {
    width: '90%',
    maxWidth: 300,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 6,
    textAlign: 'center',
    fontSize:20
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
    fontSize: 18,
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
