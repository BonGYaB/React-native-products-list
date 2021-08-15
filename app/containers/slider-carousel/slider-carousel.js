/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/
import React from 'react';
import { Dimensions, View } from "react-native";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Banner2, Banner5 } from '../../assets/images';
import styles from './styles/slider-carousel.style';

const { width: screenWidth } = Dimensions.get('window');

export default class SliderCarousel extends React.Component {
    constructor(props){
    super(props);
        this.state = {
          carouselItems: [
            {
                source: Banner5,
            },
            {
                source: Banner2,
            },
            {
                source: Banner5,
            },
            {
                source: Banner2,
            },
            {
                source: Banner5,
            },
            {
                source: Banner2,
            },
        ]
      }
    }

    _renderItem = ({item, index}, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={item.source}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                {/* <Image
                    style={styles.image}
                    source={item.source}
                    alt="splash"/> */}
            </View>
        );
    }

    render() {
        return (
            <Carousel
                data={this.state.carouselItems}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                renderItem={this._renderItem}
                autoplay={true}
                hasParallaxImages={true} />
        );
    }
}