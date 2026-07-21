
import { Text, View,StyleSheet} from "react-native";
function Welecome({country,name,style}){

 
// Add inline style 

return(
<View style={style}>
<Text style={styles.txt1} >welecome youre name is :{name}</Text>
<Text style={styles.txt2}>And youre country is :{country}</Text>

</View>


)

 }
  
 
 
 { 

// Add  style  using stylesheet

}

const styles=StyleSheet.create({
txt1:{color:"white",fontSize:20,fontWeight:"bold"},
txt2:{color:"yellow",fontSize:20,fontWeight:"bold"}

})
export default Welecome;