/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/
import {
	responsiveFontSize,
	responsiveWidth
} from 'react-native-responsive-dimensions';

export function getFontSize(value) {
	return responsiveFontSize(value);
}

export function getPixel(value) {
	return responsiveWidth(value);
}
