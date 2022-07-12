import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import MashButton from './component/CustomButton';
import  SQLite from "react-native-sqlite-storage";
import { useSelector, useDispatch } from "react-redux";
import {setName, setPassword, setPlus, setMinus, getMeme} from './redux/actions';
import CustomListview from './component/CustomListview';

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default'
    },
    () => {},
    error => {console.log(error)}
);

export default function HomeScreen({navigation}){

  const { name, password, age, meme } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  // const[name, SetName] = useState('');
  // const[password, SetPassword] = useState('');

    const onPressHandler  = async () =>{
      try{
        //await AsyncStorage.clear();
        db.transaction((tx) => {
          tx.executeSql(
            "DELETE FROM Users",
            [],
            () => { navigation.navigate('Login')},
            error => {console.log(error)}
          )
        })
       

      }catch(error){
        console.log(error);
      }
    }

    useEffect(() => {
      dispatch(getMeme())
      getData();
    },[]);

    const getData = () =>{
      try{
        // AsyncStorage.getItem('UserData').
        // then(value => {
        //   if(value != null){
        //     let User = JSON.parse(value);
        //     //console.log(User);
        //     SetName(User.Name);
        //     SetPassword(User.Password)
        //   }
        // })

        db.transaction((tx)=>{
          tx.executeSql(
            "SELECT Name, Password FROM Users",
            [],
            (tx, results) => {
              var len = results.rows.length;
              if(len > 0){
                var userName = results.rows.item(0).Name;
                var userPassword = results.rows.item(0).Password;
                dispatch(setName(userName));
                dispatch(setPassword(userPassword));
              }
            }
          )
        })

      }catch(error){
        console.log(error);
      }
    }

    const onPressPlus = () => {
      //console.log('age:'+ age);
      dispatch(setPlus(age));
    }

    const onPressMinus = () => {
      if(age > 0){
        dispatch(setMinus(age));
      }
    }
  
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome {name}</Text>
        <CustomListview
          itemList = {meme}
        />
        
        {/* <Button
          title="Press me"
          onPress={onPressHandler}
        /> */}

        {/* <Text>age {age}</Text>

        <MashButton
        onPressFunction = {onPressHandler}
        title = 'Logout'
        color = '#1eb900'
        />

        <MashButton
          
          onPressFunction = {onPressPlus}
          title = 'plus'
          color = '#FF0000'
        />

        <MashButton
          onPressFunction = {onPressMinus}
          title = 'minus'
          color = '#0000FF'
        /> */}

      </View>
    )
  }

//   const styles = StyleSheet.create({
//     item:{
//         alignItems: 'center',
//         justifyContent: 'center',
//         margin: 10,
//         borderWidth: 1,
//     }
// })