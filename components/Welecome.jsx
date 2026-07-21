
import { Text, View} from "react-native";
function Welecome({country,name,style}){

 
// Add inline style 

return(
<view style={style}>
<Text style={{color:"white",fontSize:30,fontWeight:"bold"}} >welecome youre name is :{name}</Text>
<Text style={{color:"white",fontSize:30,fontWeight:"bold"}}>And youre country is :{country}</Text>

</view>


)

 


}
export default Welecome;