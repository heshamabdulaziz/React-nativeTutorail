import { useState } from "react";
import Box from "../../components/Box";
import { Text, View,Button, StyleSheet, Alert} from "react-native";
import { Background } from "expo-router/build/react-navigation";
import { Color } from "expo-router";


export default function Index() {
 
  return (
    <View style={styles.container}>
       
   <Box  style={{backgroundColor:"red",} } />
   <Box  style={{backgroundColor:"green",flexGrow:1}} />
   <Box  style={{backgroundColor:"yellow",flexShrink:1}} />
   
    </View>
  );
}


const styles=StyleSheet.create({
container:{
flex:1,


flexDirection:"column",
alignItems:"center",


  backgroundColor:"darkgrey"
}

})