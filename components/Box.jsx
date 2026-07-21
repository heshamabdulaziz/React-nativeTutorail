
import { Text, View,StyleSheet} from "react-native";
export default function Box({style}){
return(
<View style={[styles.box,style]}>


</View>

)

}
const styles=StyleSheet.create({
box:{
    backgroundColor:"white",
    padding:20,
    marginVertical:10,
}

})