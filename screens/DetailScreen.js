import React from 'react';
import { View, Text,Button } from 'react-native';

const DetailScreen = props=> {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
        <Text>Detail Screen</Text>
        <Button title="Go To Profile" onPress={ ()=>props.navigation.navigate('Profile')}/>
      </View>
    );
}
  
export default DetailScreen;