
import { Text, View,StyleSheet} from "react-native";
export default function Box({style}){
return(
<View style={[styles.box,style]}>

<Text style={styles.txt}> text flexbshrink</Text>
</View>

)

}
const styles=StyleSheet.create({
box:{
    backgroundColor:"white",
    padding:20,
    marginVertical:10,
    
},
txt:{fontSize:25,
textAlign:"center",
    fontWeight:"bold"}
})