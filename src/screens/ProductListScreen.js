// src/screens/ProductListScreen.js
import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProductListScreen = ({products}) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetail', {product: item})}>
          <View style={{padding: 16, borderBottomWidth: 1}}>
            <Text>{item.name}</Text>
            <Text>Price: ₹{item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ProductListScreen;
