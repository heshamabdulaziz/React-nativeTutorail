import { useState } from "react";
import Box from "../../components/Box";
import { Text, View, StyleSheet,Platform, ScrollView, FlatList} from "react-native";
import { Background } from "expo-router/build/react-navigation";
import { Color } from "expo-router";




export default function Index() {
//retern data from list 

const users = [
  { id: 1, name: "Liam", age: 24 },
  { id: 2, name: "Olivia", age: 28 },
  { id: 3, name: "Noah", age: 31 },
  { id: 4, name: "Emma", age: 26 },
  { id: 5, name: "James", age: 35 },
  { id: 6, name: "Sophia", age: 29 },
  { id: 7, name: "William", age: 41 },
  { id: 8, name: "Isabella", age: 23 },
  { id: 9, name: "Benjamin", age: 37 },
  { id: 10, name: "Mia", age: 30 },
  { id: 11, name: "Lucas", age: 27 },
  { id: 12, name: "Charlotte", age: 32 },
  { id: 13, name: "Henry", age: 45 },
  { id: 14, name: "Amelia", age: 21 },
  { id: 15, name: "Alexander", age: 39 },
  { id: 16, name: "Harper", age: 25 },
  { id: 17, name: "Daniel", age: 34 },
  { id: 18, name: "Evelyn", age: 28 },
  { id: 19, name: "Matthew", age: 33 },
  { id: 20, name: "Abigail", age: 24 },
  { id: 21, name: "Michael", age: 42 },
  { id: 22, name: "Emily", age: 36 },
  { id: 23, name: "Ethan", age: 29 },
  { id: 24, name: "Elizabeth", age: 31 },
  { id: 25, name: "Jacob", age: 27 },
  { id: 26, name: "Avery", age: 22 },
  { id: 27, name: "Logan", age: 40 },
  { id: 28, name: "Sofia", age: 26 },
  { id: 29, name: "Jackson", age: 35 },
  { id: 30, name: "Ella", age: 30 },
  { id: 31, name: "Sebastian", age: 28 },
  { id: 32, name: "Scarlett", age: 34 },
  { id: 33, name: "Jack", age: 38 },
  { id: 34, name: "Grace", age: 23 },
  { id: 35, name: "Aiden", age: 41 },
  { id: 36, name: "Chloe", age: 27 },
  { id: 37, name: "Owen", age: 33 },
  { id: 38, name: "Victoria", age: 29 },
  { id: 39, name: "Samuel", age: 24 },
  { id: 40, name: "Riley", age: 32 },
  { id: 41, name: "Joseph", age: 36 },
  { id: 42, name: "Aria", age: 25 },
  { id: 43, name: "David", age: 39 },
  { id: 44, name: "Lily", age: 28 },
  { id: 45, name: "John", age: 44 },
  { id: 46, name: "Hannah", age: 22 },
  { id: 47, name: "Wyatt", age: 31 },
  { id: 48, name: "Zoey", age: 26 },
  { id: 49, name: "Luke", age: 37 },
  { id: 50, name: "Natalie", age: 30 },
  { id: 51, name: "Gabriel", age: 29 },
  { id: 52, name: "Leah", age: 35 },
  { id: 53, name: "Carter", age: 27 },
  { id: 54, name: "Audrey", age: 24 },
  { id: 55, name: "Julian", age: 38 },
  { id: 56, name: "Claire", age: 33 },
  { id: 57, name: "Isaac", age: 40 },
  { id: 58, name: "Brooklyn", age: 21 },
  { id: 59, name: "Leo", age: 26 },
  { id: 60, name: "Lucy", age: 29 },
  { id: 61, name: "Nathan", age: 34 },
  { id: 62, name: "Anna", age: 31 },
  { id: 63, name: "Aaron", age: 42 },
  { id: 64, name: "Ellie", age: 23 },
  { id: 65, name: "Christopher", age: 36 },
  { id: 66, name: "Stella", age: 28 },
  { id: 67, name: "Andrew", age: 32 },
  { id: 68, name: "Hazel", age: 27 },
  { id: 69, name: "Thomas", age: 41 },
  { id: 70, name: "Aurora", age: 25 },
  { id: 71, name: "Charles", age: 39 },
  { id: 72, name: "Savannah", age: 30 },
  { id: 73, name: "Josiah", age: 28 },
  { id: 74, name: "Penelope", age: 34 },
  { id: 75, name: "Isaiah", age: 35 },
  { id: 76, name: "Bella", age: 22 },
  { id: 77, name: "Ryan", age: 37 },
  { id: 78, name: "Violet", age: 26 },
  { id: 79, name: "Adrian", age: 33 },
  { id: 80, name: "Mila", age: 29 },
  { id: 81, name: "Christian", age: 40 },
  { id: 82, name: "Nora", age: 24 },
  { id: 83, name: "Jonathan", age: 31 },
  { id: 84, name: "Camila", age: 27 },
  { id: 85, name: "Hunter", age: 38 },
  { id: 86, name: "Layla", age: 30 },
  { id: 87, name: "Connor", age: 36 },
  { id: 88, name: "Lillian", age: 23 },
  { id: 89, name: "Jeremiah", age: 34 },
  { id: 90, name: "Paisley", age: 28 },
  { id: 91, name: "Colton", age: 41 },
  { id: 92, name: "Addison", age: 26 },
  { id: 93, name: "Robert", age: 39 },
  { id: 94, name: "Skylar", age: 25 },
  { id: 95, name: "Nicholas", age: 32 },
  { id: 96, name: "Madison", age: 29 },
  { id: 97, name: "Dominic", age: 35 },
  { id: 98, name: "Willow", age: 24 },
  { id: 99, name: "Xavier", age: 37 },
  { id: 100, name: "Ruby", age: 27 },
  { id: 101, name: "Victor", age: 43 },
  { id: 102, name: "Alice", age: 22 },
  { id: 103, name: "George", age: 33 },
  { id: 104, name: "Eva", age: 28 },
  { id: 105, name: "Anthony", age: 40 },
];
  return (

<FlatList data={users}
renderItem={({item,index})=>{
  console.log(index);
  
return(
<View key={index} style={styles.card}>
<Text style={styles.txt} >{item.name}</Text>
<Text style={styles.txt} >{item.age}</Text>

</View>
 )

 }} />
 
   
   
   
  );
}


const styles=StyleSheet.create({
container:{
flex:1,
flexDirection:"column",

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