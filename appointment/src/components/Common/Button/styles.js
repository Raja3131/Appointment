import { StyleSheet } from "react-native";
import colors from "../../../styles/theme/colors";

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        padding:10,
        margin:10,
        borderRadius:5,
    },
    buttonText:{
        color:colors.white,
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",

    }
})
export default styles;