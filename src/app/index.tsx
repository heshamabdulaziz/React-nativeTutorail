import { useState } from "react";
import Box from "../../components/Box";
import { Text, View,Button, StyleSheet, Alert} from "react-native";
import { Background } from "expo-router/build/react-navigation";
import { Color } from "expo-router";


export default function Index() {
 
  return (
    <View style={styles.container}>
       
   <Box boxNo="1" style={{backgroundColor:"red",flex:1}} />
   <Box boxNo="2" style={{backgroundColor:"yellow",flex:2}} />
    <Box boxNo="3" style={{backgroundColor:"blue",flex:1}} />
     <Box boxNo="4" style={{backgroundColor:"green",flex:1}} />



    </View>
  );
}


const styles=StyleSheet.create({
container:{
  flex:1,
  flexDirection:"row",
  backgroundColor:"darkgrey"}

})