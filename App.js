/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/containers/home/home.container';
import ProductDetail from './app/containers/product-detail/product-detail'

export default function App() {
  return (
    <Home/>
  );
}

// const Stack = createStackNavigator();

// const AppStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           // name="Home"
//           component={Home}
//           // options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="ProductDetail" component={ProductDetail} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppStack;