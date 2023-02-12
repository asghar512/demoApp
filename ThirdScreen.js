import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image
} from "react-native";
import { auth, database } from "../firebase";
import Donor from '../assets/img1.jpeg'
const ThirdScreen = (props) => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
    <View style={styles.container}>
       <View><Image style={{height:80,width:80,borderRadius:80,borderColor:'#C80000',borderWidth:2, alignSelf : 'center'}} source = {Donor}/><Text style={{alignSelf:'center'}}>Be a Donor</Text></View>
    </View>
    <View>

    </View>
    </>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  container1: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  officealert: {
    color: "black",
    fontSize: 20,
    marginBottom: 30,
    fontWeight: "bold",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    //marginLeft: 10,
    marginBottom: 3,
    marginRight:90,
  },

  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 14,
  },

});
