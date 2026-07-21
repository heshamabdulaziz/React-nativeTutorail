
import { Text, View,StyleSheet} from "react-native";
function Welecome({country,name,style}){

 
// Add  Multiple Styles 

return(
<View style={style}>
<Text style={[styles.txt,styles.txt1]} >welecome youre name is :{name}</Text>
<Text style={[styles.txt,styles.txt2]}>And youre country is :{country}</Text>

</View>


)

 }
  
 
 
 { 

// Add  Multiple Styles 

}

const styles=StyleSheet.create({
txt:{fontSize:20,fontWeight:"bold"},
txt1:{color:"white",},
txt2:{color:"yellow"}

})
export default Welecome;