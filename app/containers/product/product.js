/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/
import React from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { Banner2, Banner5 } from '../../assets/images';
import styles from './styles/product.style'

export default class Product extends React.Component {
  constructor(props){
    super(props);
    // Variable
    this.columnNumber = 2;
    this.state = {
      activeIndex:0,
      items: [
        {
          title:"Drill from Germany with latest Technology, Drill from Germany with latest Technology",
          image: Banner2,
          price: "10 $"
        },
        {
          title:"Drill from Germany with latest Technology",
          image: Banner5,
          price: "30 $"
        },
        {
          title:"Drill from Germany with latest Technology",
          image: Banner5,
          price: "40 $"
        },
        {
          title:"Drill from Germany with latest Technology",
          image: Banner2,
          price: "25 $"
        },
        {
          title:"Drill from Germany with latest Technology",
          image: Banner2,
          price: "22 $"
        },
        {
          title:"Drill from Germany with latest Technology",
          image: Banner5,
          price: "24 $"
        },
        {
          title:"Drill from Germany with latest Technology",
          image: Banner5,
          price: "20 $"
        },
        {
          title:"Drill from Germany with latest Technology",
          image: Banner2,
          price: "24 $"
        },
      ]
    }
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={{width: (100/this.columnNumber + '%')}}
      onPress={() => {
        // const navigation = useNavigation();
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
        console.log("###");
      }}>
      <View style={styles.item}>
          <Image
            style={styles.itemImage}
            source={item.image}
            alt="splash"
            />
          <View style={styles.itemTitleContainer}>
              <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.itemTitleContainer}>
              <Text style={styles.price}>{item.price}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          numColumns={this.columnNumber}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          />
      </View>
    );
  }
}