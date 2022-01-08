import React from 'react';
import { View, Text,Button } from 'react-native';

const ProfileScreen = props => {
    return (
        <View style={{flex: 1,justifyContent: 'center',alignItems:'center'}}>
            <Text>Profile Screen</Text>
            <Button title="Go To Explore" onPress={ ()=>props.navigation.navigate('Explore')}/>
        </View>
    )
}

export default ProfileScreen;
