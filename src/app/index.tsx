import { useState } from "react";
import Box from "../../components/Box";
import { Text, View,Button, StyleSheet, Alert} from "react-native";
import { Background } from "expo-router/build/react-navigation";
import { Color } from "expo-router";


export default function Index() {
 
  return (
    <View style={styles.container}>
       
   <Box  style={{backgroundColor:"red",flexBasis:200} } />
   <Box  style={{backgroundColor:"yellow",height:200}} />
    <Box  style={{backgroundColor:"blue"}} />
     <Box  style={{backgroundColor:"green"}} />
  <Box  style={{backgroundColor:"red"}} />
   <Box  style={{backgroundColor:"yellow"}} />
    <Box  style={{backgroundColor:"blue"}} />
     <Box  style={{backgroundColor:"green"}} />
    </View>
  );
}


const styles=StyleSheet.create({
container:{
flex:1,



  backgroundColor:"darkgrey"
}

})