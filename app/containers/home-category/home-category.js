/**
 * @author [BonGYaB(SEAN Sen)]
 * @email [sen.sean2@gmail.com]
 * @create date 2021
 * @desc [Main view of all screen]
*/
import React from "react";
import { TouchableOpacity, ScrollView, View, FlatList, Text, Image, Alert } from "react-native";
import { IconBuy, IconEngineer, IconForRent, IconMaterial } from '../../assets/icons';
import { BaseView } from "../../components/views";
import styles from './styles/home-category.style';

export default class HomeCategory extends React.Component {
  constructor(props){
      super(props);
      this.columnNumber = 4;

      this.state = {
        activeIndex:0,
        items: [
        {
          title:"Buy",
          image: IconBuy
        },
        {
          title:"Engineer",
          image: IconEngineer
        },
        {
          title:"Rent",
          image: IconForRent
        },
        {
          title:"Material",
          image: IconMaterial
        },
        {
          title:"Wall-Tool",
          image: IconMaterial
        },
        {
          title:"Home Decor",
          image: IconForRent
        },
        {
          title:"Engineer",
          image: IconEngineer
        },
        {
          title:"House",
          image: IconBuy
        }
      ]
    }
  }

  _renderItem = ({item}) => (
    <TouchableOpacity
      style={{width: (100/this.columnNumber + '%')}}
      onPress={()=> {
        console.log("##### Category Clicked ######");
        Alert.alert('Message', 'Comming soon.');
      }}>
      <View style={styles.itemContainer}>
          <Image style={styles.itemImage}
                  source={item.image}
                  alt="splash"/>
          <View style={styles.textContainer}>
              <Text style={styles.text}>{item.title}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <BaseView>
        <ScrollView horizontal>
          <ScrollView>
            <FlatList
              data={this.state.items}
              numColumns={4}
              renderItem={this._renderItem}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </ScrollView>
      </BaseView>
    );
  }
}