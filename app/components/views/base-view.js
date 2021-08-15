/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/

import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Colors } from '../../themes';

const BaseView = ({ children, baseViewStyles }) => (
	<SafeAreaView style={[{ backgroundColor: Colors.white }, baseViewStyles]} forceInset={{ top: 'always' }}>
		{children}
	</SafeAreaView>
);

export default BaseView;
