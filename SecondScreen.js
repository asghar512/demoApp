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
  Image,
  FlatList
} from "react-native";
import { auth, database } from "../firebase";
import Items from './Items'

const HomeScreen = (props) => {
  
  const navigation = useNavigation();
  
  const [cartItems,setCartItems]=useState(Items);
  console.log(cartItems)



  const renderCartItem = ({ item }) => (

      <View style={styles.dataContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: `${item.imgdata}`}} style={styles.image } />
      </View>  
      <Text style={styles.texts}>Item Name: {item.rname}</Text>
      <Text style={styles.texts}>Address:{item.address}</Text>
      <Text style={styles.textsRatings}>Rating: {item.rating}</Text>
      <Text style={styles.textsPrice}>Price: {item.price}</Text>
      </View>
    

  );

  const calcTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

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
            Second Screen
          </Text>
          <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <Text>Total:</Text>
        <Text>${calcTotal()}</Text>
      </View>
      <TouchableOpacity
        style={{ backgroundColor: 'black', padding: 10, alignItems: 'center', marginTop: 20 }}
      >
        <Text style={{ color: 'white' }}>Checkout</Text>
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
  // scrollView: {
  //   backgroundColor: "white",
  //   marginHorizontal: 10,
  // },
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

  texts: {
    color: "black",
    fontWeight: "500",
    fontSize: 14,
  },
  textsRatings: {
    color: "green",
    fontWeight: "500",
    fontSize: 20,
  },
  textsPrice: {
    color: "red",
    fontWeight: "500",
    fontSize: 20,
  },


  cardContainer: {
    flexDirection: 'row',
    margin: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 3,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    color:'black',

  },
  dataContainer: {
    flex: 1,
    padding: 26,
    marginTop: 10,
    textAlign: "center",
    color:'red',
    borderRadius: 10,
    backgroundColor:"white",
    borderColor: "#0782F9",
    borderWidth: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  data: {
    fontSize: 14,
    color: '#666666',
    marginTop: 8,
  }
  
});
