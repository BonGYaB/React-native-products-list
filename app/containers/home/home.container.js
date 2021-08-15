/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/
import React from "react";
import { ScrollView, StatusBar, useColorScheme, Text, View, TouchableOpacity } from 'react-native';
import { BaseView } from '../../components/views'
import SliderCarousel from '../../containers/slider-carousel/slider-carousel';
import Product from '../../containers/product/product';
import HomeCategory from '../../containers/home-category/home-category';
import styles from './styles/home.style';

export default function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <BaseView>
      <ScrollView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Construction Mart</Text>
        </View>
        <SliderCarousel/>
        <HomeCategory/>
        <Text style={styles.productFeature}>Product Feature</Text>
        <Product/>
      </ScrollView>
    </BaseView>
  );
}