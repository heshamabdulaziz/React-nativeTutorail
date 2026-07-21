import { useState } from "react";
import Welecome from "../../components/Welecome";
import { Text, View,Button, StyleSheet, Alert} from "react-native";
import { Background } from "expo-router/build/react-navigation";
import { Color } from "expo-router";


export default function Index() {
 
  return (
    <View style={{ flex:1,backgroundColor:"white"}}>
       
   <View style={styles.box}>

  <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>box_1</Text>
   </View>



    </View>
  );
}

const styles = StyleSheet.create({

  box: {
  width:200,
  height:200,
  backgroundColor:"red",
  paddingVertical:50,
  paddingHorizontal:50,
  marginVertical:200,
  marginHorizontal:100,
   borderWidth:10,
  borderColor:"black",
  borderStyle:"dotted",
  borderTopRightRadius:20,
  borderBottomLeftRadius:20,
  shadowColor:"yellow",
  shadowOffset:{width:30,height:30},
  shadowOpacity:0.5,
  shadowRadius:20

 

  },
});
