import React from "react";
import { FlatList, TouchableOpacity, View, StyleSheet} from "react-native";
import CustomRow from './CustomRow';

const CustomListview = (props) => {
    const onPressHandler = () =>{

    }
    return (
    <View style={styles.container}>
        <FlatList
                data={props.itemList}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity onPress={onPressHandler}>
                            <CustomRow
                                title={item.id}
                                description={item.name}
                                image_url={item.url}
                            />
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />

    </View>
    );
};

export default CustomListview;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});