import { useState } from "react";
import Box from "../../components/Box";
import { Text, View,Button, StyleSheet, Alert} from "react-native";
import { Background } from "expo-router/build/react-navigation";
import { Color } from "expo-router";


export default function Index() {
 
  return (
    <View style={styles.container}>
       
   <Box boxNo="1" style={{backgroundColor:"red",alignSelf:"flex-end"}} />
   <Box boxNo="2" style={{backgroundColor:"yellow",alignSelf:"flex-start"}} />
    <Box boxNo="3" style={{backgroundColor:"blue",alignSelf:"center"}} />
     <Box boxNo="4" style={{backgroundColor:"green",alignSelf:"stretch"}} />



    </View>
  );
}


const styles=StyleSheet.create({
container:{
  flex:1,
 
  backgroundColor:"darkgrey"}

})