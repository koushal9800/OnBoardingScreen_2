import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';



const LoginScreen =({navigation }) =>{
    return(
        <View style={{ 

            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
                <Text> Login Screen </Text>
                <Button 
                title="Click Here"
                onPress={() => alert("Button Clicked") }
                />
        </View>
    );
};


export default LoginScreen;