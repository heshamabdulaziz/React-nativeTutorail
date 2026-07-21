
import { Text, View} from "react-native";
export default function Box({boxNo,style}){
return(
<View style={style}>
<Text style={{fontSize:20,fontWeight:"bold",color:"white",margin:"auto"}}>{boxNo}</Text>

</View>

)

}