import React , { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, Button, Alert } from "react-native";
import MashButton from "./component/CustomButton";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import  SQLite from "react-native-sqlite-storage";
import { useSelector, useDispatch } from "react-redux";
import {setName , setPassword } from './redux/actions';


const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default'
    },
    () => {},
    error => {console.log(error)}
);

export default function LoginScreen({navigation}){

    const { name, password } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    // const[submitted, SetSubmitted] = useState(false);
    //const[name, SetName] = useState('');
    //const[password, SetPassword] = useState('');

    const onPressHandler = async () =>{
        
       if(name.length == 0 || password.length == 0){
            Alert.alert('Warning!','Please write your data');
       }else{
            try{
                dispatch(setName(name));
                dispatch(setPassword(password));
                // var User = {
                //     Name: name,
                //     Password: password
                // }

                // await AsyncStorage.setItem('UserData', JSON.stringify(User));

                await db.transaction(async (tx)=>{
                    await tx.executeSql(
                        "INSERT INTO Users (Name,Password) VALUES (?,?)",
                        [name,password]
                    );
                })

                navigation.navigate('Home');
            }catch(error){
                console.log(error);
            }

       }
    }

    useEffect(() => {
        createTable();
        getData();
      },[]);


    const createTable = () =>{
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Password TEXT);"
            )
        })
    }  
  
    const getData = () =>{
        try{
        //   AsyncStorage.getItem('UserData').
        //   then(value => {
        //     if(value != null){
        //         navigation.navigate('Home');
        //     }
        //   })
        db.transaction((tx)=>{
            tx.executeSql(
              "SELECT Name, Password FROM Users",
              [],
              (tx, results) => {
                var len = results.rows.length;
                if(len > 0){
                    navigation.navigate('Home');
                }
              }
            )
          })



        }catch(error){
          console.log(error);
        }
    }

    return(
        <View style={styles.body}>
            <Image 
                style={styles.icon}
                source={require('../assets/newsicon.png')}
            />
            <Text style={styles.text}>Async Storage</Text>
            <TextInput 
                style={styles.input}
                placeholder= 'Enter your name'
                onChangeText={(value) => dispatch(setName(value))}
                />

            <TextInput 
                style={styles.input}
                placeholder= 'Enter your password'
                onChangeText={(value) => dispatch(setPassword(value))}
                />    

            {/* <Button style={styles.button} title={submitted ? 'edit' : 'save'} onPress={onPressHandler} /> */}

            <MashButton 
                onPressFunction = {onPressHandler}
                title='Login'
                color = '#1eb900'
            />
               
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#153f3f',
    },
    icon:{
        width:100,
        height:100,
        marginTop: 100,
    },
    text:{
        fontSize: 30,
        color: '#ffffff',
        margin: 10,
        
    },
    input:{
        width:300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 30,
        marginBottom: 10,
        height: 50

    },
    button:{
        backgroundColor:'ffffff',
        margin: 30
    }
})