import React from 'react';
import { View, Text,Button } from 'react-native';

const ExploreScreen = props => {
    return (
        <View style={{flex: 1,justifyContent: 'center',alignItems:'center'}}>
            <Text>Explore Screen</Text>
            <Button title="Go To Home" onPress={ ()=>props.navigation.navigate('Home')}/>
        </View>
    )
}

export default ExploreScreen;
