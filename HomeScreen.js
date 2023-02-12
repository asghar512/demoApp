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
} from "react-native";
import { auth, database } from "../firebase";

const HomeScreen = (props) => {
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
    <View style={styles.container}>
      <SafeAreaView style={styles.container1}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.officealert}>
            First Screen
          </Text>
          
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SecondScreen")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Second Screen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("ThirdScreen")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Third Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("FourthScreen")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Fourth Screen</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignOut} style={styles.button}>
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>

          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

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
