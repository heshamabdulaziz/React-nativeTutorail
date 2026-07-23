import { useState } from "react";
import Box from "../../components/Box";
import { Text, View,Button, StyleSheet, Alert,Platform} from "react-native";
import { Background } from "expo-router/build/react-navigation";
import { Color } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Index() {
 
  return (
    <SafeAreaView>
    <View style={styles.container}>
       
   <Box  style={{backgroundColor:"red",} } />
   <Box  style={{backgroundColor:"green",flexGrow:1}} />
   <Box  style={{backgroundColor:"blue",flexShrink:1}} />
   
    </View>
    </SafeAreaView>
  );
}


const styles=StyleSheet.create({
container:{
flex:1,


flexDirection:"column",
alignItems:"center",
...Platform.select({
  ios:{backgroundColor:"red",
    color:"white"},
    web:{backgroundColor:"yellow"}

  }),
  }
})