/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/
import { StyleSheet } from "react-native";
import { Colors } from "../../../themes";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lighGrey
    },
    itemContainer: {
        flex: 1,
        padding: 10,
        marginTop: 5,
        width: 100,
        height: 75,
        justifyContent: "center",
        alignContent: "center",
    },
    itemImage: {
        flex: 1.5,
        width: "100%",
        height: "auto",
        resizeMode: 'contain'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        marginTop: 5,
        fontSize: 13,
        flexWrap: "wrap-reverse",
        textAlign: 'center',
    }
});

export default styles;