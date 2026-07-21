import { useState } from "react";
import Welecome from "../../components/Welecome";
import { Text, View,Button, StyleSheet, Alert} from "react-native";
import { Background } from "expo-router/build/react-navigation";
import { Color } from "expo-router";


export default function Index() {
 
  return (
    <View style={{ flex:1,}}>
       
    <Welecome name="hesham" country="Canada" style={{padding:20,backgroundColor:"red"}}/>

      {
   /*
  
Create Custom Componnets 

     */
    
      }




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:10
  },
});
