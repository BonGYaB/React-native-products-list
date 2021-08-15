/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/
import { StyleSheet, StatusBar } from "react-native";
import { Colors } from "../../../themes";

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 10,
        flex: 1,
        height: 150,
        justifyContent: "center",
    },
    itemImage: {
        flex: 3,
        width: "100%",
        height: "auto",
        resizeMode: 'contain'
    },
    itemTitleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 15,
        flexWrap: "wrap-reverse",
        textAlign: 'center'
    },
    price: {
        fontSize: 15,
        flexWrap: "wrap-reverse",
        color: Colors.red,
        textAlign: 'center'
    },
});

export default styles;