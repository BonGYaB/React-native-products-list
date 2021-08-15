/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../../../App';
import ProductDetail from '../../containers/product-detail/product-detail';

const screens = {
    Home: {
        screen: App
    },
    ProductDetail: {
        screen: ProductDetail
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);