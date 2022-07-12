import React from "react";
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const CustomRow = (props) => {
    
    return (
    <View style={styles.container}>
        <Image  source={{ uri: props.image_url }} style={styles.photo} />
        <View>
            <Text>
                {props.title}
            </Text>
            <Text>
                {props.description}
            </Text>
        </View>
    </View>
    );
};

export default CustomRow;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        height:120
    },

    title: {
        fontSize: 16,
        color: '#000',
        bottom: 20
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        top:10,
        justifyContent: 'center',
    },
    
    description: {
        bottom: 10,
        fontSize: 16,
       
    },
    quantity: {
        fontSize: 16,
       
    },
    photo: {
        height: 80,
        width: 80
    },
});