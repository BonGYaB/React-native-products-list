/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/
import { getFontSize } from '../lib/responsive';

const responsiveFont = {
	8: getFontSize(1.225999999999975),
	9: getFontSize(1.3789999999999583),
	10: getFontSize(1.5319999999999414),
	11: getFontSize(1.6849999999999246),
	12: getFontSize(1.8379999999999077),
	13: getFontSize(1.9909999999998909),
	14: getFontSize(2.144999999999874),
	15: getFontSize(2.297999999999857),
	16: getFontSize(2.45099999999984),
	17: getFontSize(2.6039999999998233),
	18: getFontSize(2.7569999999998065),
	19: getFontSize(2.9109999999997895),
	20: getFontSize(3.0639999999997727),
	21: getFontSize(3.216999999999756),
	22: getFontSize(3.370999999999739),
	23: getFontSize(3.523999999999722),
	24: getFontSize(3.676999999999705),
	25: getFontSize(3.8299999999996883),
	26: getFontSize(3.9829999999996715),
	27: getFontSize(4.136999999999715)
};

const type = {
	base: 'HelveticaNeue',
	bold: 'HelveticaNeue-Bold',
	emphasis: 'HelveticaNeue-Italic'
};

const weight = {
	medium: '500',
	bold: '700',
	xtraBold: '900'
};

const size = {
	h1: 38,
	h2: 34,
	h3: 30,
	h4: 26,
	h5: 20,
	h6: 19,
	input: responsiveFont[13],
	regular: responsiveFont[13],
	medium: responsiveFont[16],
	large: responsiveFont[17],
	small: responsiveFont[12],
	upTiny: responsiveFont[10],
	smaller: responsiveFont[11],
	tiny: responsiveFont[8]
}

const style = {
	h1: {
		fontSize: size.h1
	},
	h2: {
		fontWeight: weight.bold,
		fontSize: size.h2
	},
	h3: {
		fontSize: size.h3
	},
	h4: {
		fontSize: size.h4
	},
	h5: {
		fontSize: size.h5
	},
	h6: {
		fontSize: size.h6
	},
	normal: {
		fontSize: size.regular
	},
	description: {
		fontSize: size.medium,
		fontWeight: weight.bold
	},
	title: {
		fontSize: size.medium
	},
	boldFont: {
		fontWeight: weight.bold
	}
};

export default {
	type,
	size,
	style,
	weight
};