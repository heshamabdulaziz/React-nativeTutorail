import { useState } from "react";
import Box from "../../components/Box";
import { Text, View,Button, StyleSheet, Alert} from "react-native";
import { Background } from "expo-router/build/react-navigation";
import { Color } from "expo-router";


export default function Index() {
 
  return (
    <View style={styles.container}>
       
   <Box boxNo="1" style={{backgroundColor:"red"}} />
   <Box boxNo="2" style={{backgroundColor:"yellow"}} />
    <Box boxNo="3" style={{backgroundColor:"blue"}} />
     <Box boxNo="4" style={{backgroundColor:"green"}} />



    </View>
  );
}


const styles=StyleSheet.create({
container:{
  flex:1,
  flexDirection:"column",
justifyContent:"space-around",
alignItems:"center",
  backgroundColor:"darkgrey"}

})