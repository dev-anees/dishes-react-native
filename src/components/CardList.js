import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from '../elements/Card';

const CardList = (props) => {
  const { items } = props;
  return (
    <FlatList
        data={items}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={({index})=>{
          return index.toString();
        }}
        renderItem={(item) => {
          return(
            <Card item={item.item} />
          );
        }}/>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: "#cccccc"
  }
});  

export default CardList;