import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

const MashButton = (props) => {
    return(
        <Pressable
            onPress={props.onPressFunction}
            hitSlop = {{top: 10, bottom: 10, right: 10, left: 10}}
            android_ripple={{color:'#00f'}}
            style = {({pressed}) => [
                {backgroundColor: pressed? '#dddddd' : props.color},
                styles.button
            ]}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </Pressable>
    )
}

export default MashButton;

const styles = StyleSheet.create({
    
    text:{
        fontSize: 20,
        color: '#000000',
        margin: 10,
        textAlign: 'center'
        
    },
    button:{
        width: 150,
        height: 50,
        alignItems: 'center',
        margin: 10

    }
})