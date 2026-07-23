import { useState } from "react";
import Box from "../../components/Box";
import { Text, View,Button, StyleSheet, Alert,Platform} from "react-native";
import { Background } from "expo-router/build/react-navigation";
import { Color } from "expo-router";




export default function Index() {
//retern data from list 

const users = [
  { id: 1, name: "Hesham", age: 38 },
  { id: 2, name: "Ahmed", age: 25 },
  { id: 3, name: "Mohammed", age: 31 },
  { id: 4, name: "Ali", age: 29 },
  { id: 5, name: "Omar", age: 34 },
  { id: 6, name: "Yousef", age: 27 },
  { id: 7, name: "Khalid", age: 40 },
  { id: 8, name: "Abdullah", age: 22 },
  { id: 9, name: "Ibrahim", age: 36 },
  { id: 10, name: "Saad", age: 30 },
  { id: 11, name: "Fahad", age: 28 },
  { id: 12, name: "Nasser", age: 33 },
  { id: 13, name: "Majed", age: 41 },
  { id: 14, name: "Salem", age: 24 },
  { id: 15, name: "Tariq", age: 39 },
  { id: 16, name: "Anas", age: 26 },
  { id: 17, name: "Zaid", age: 32 },
  { id: 18, name: "Amr", age: 35 },
  { id: 19, name: "Bilal", age: 23 },
  { id: 20, name: "Hassan", age: 37 },
  { id: 21, name: "Samir", age: 29 },
  { id: 22, name: "Rami", age: 42 },
  { id: 23, name: "Karim", age: 31 },
  { id: 24, name: "Adel", age: 27 },
  { id: 25, name: "Jamal", age: 45 },
  { id: 26, name: "Mahmoud", age: 34 },
  { id: 27, name: "Nabil", age: 28 },
  { id: 28, name: "Wael", age: 36 },
  { id: 29, name: "Bassam", age: 40 },
  { id: 30, name: "Sami", age: 21 },
  { id: 31, name: "Firas", age: 33 },
  { id: 32, name: "Mustafa", age: 38 },
  { id: 33, name: "Ayman", age: 26 },
  { id: 34, name: "Yasser", age: 44 },
  { id: 35, name: "Hamza", age: 30 },
];
  return (
   
    <View style={styles.container}>
 {
users.map((user)=>
<View key={user.id} style={styles.card}>
<Text style={styles.txt} >{user.name}</Text>
<Text style={styles.txt} >{user.age}</Text>

</View>


)


 }
   
    </View>
   
  );
}


const styles=StyleSheet.create({
container:{
flex:1,
flexDirection:"column",
alignItems:"stretch",
...Platform.select({
  ios:{backgroundColor:"red",
    color:"white"},
    web:{backgroundColor:"grey"}

  }),
  
  },
  card:{backgroundColor:"darkorange",
    margin:20,
    borderRadius:10,
  },
  txt:{fontSize:25,
   textAlign:"center",
    fontWeight:"bold",color:"white"}
})