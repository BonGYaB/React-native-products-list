/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/
import { StyleSheet } from "react-native";
import { Colors, Metrics } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  headerContainer: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    height: 70,
    backgroundColor: Colors.white,
    marginTop: 15,
    marginBottom: 10
  },
  headerText: {
    alignContent: "center",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  },
	appVersion: {
		color: Colors.dark,
		position: 'absolute',
		bottom: Metrics.baseMargin,
		right: Metrics.baseMargin,
	},
  productFeature: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 15,
    marginStart: 10,
    color: Colors.dark,
    fontWeight: "bold"
  }
});

export default styles;