// src/screens/ProductDetailScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import CountdownTimer from '../components/CountdownTimer';
import {estimateDeliveryDate} from '../utils/deliveryEstimator';
import moment from 'moment';

const ProductDetailScreen = ({route}) => {
  const {product} = route.params;
  const [pincode, setPincode] = useState('');
  const [estimatedDelivery, setEstimatedDelivery] = useState('');

  const handleEstimateDelivery = () => {
    // Sample logic to determine the provider
    const provider = pincode.startsWith('1') ? 'Provider A' : 'Provider B';
    const currentTime = moment();

    const deliveryDate = estimateDeliveryDate(
      provider,
      currentTime,
      product.inStock,
    );
    setEstimatedDelivery(deliveryDate);
  };

  return (
    <View style={{padding: 16}}>
      <Text>{product.name}</Text>
      <Text>Price: ₹{product.price}</Text>
      <Text>In Stock: {product.inStock ? 'Yes' : 'No'}</Text>

      <TextInput
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={setPincode}
        style={{borderWidth: 1, padding: 8, marginVertical: 10}}
      />

      {pincode.startsWith('1') && <CountdownTimer cutoffHour={17} />}

      <Button title="Check Delivery Date" onPress={handleEstimateDelivery} />

      {estimatedDelivery && (
        <Text style={{marginTop: 10}}>
          Estimated Delivery Date: {estimatedDelivery}
        </Text>
      )}
    </View>
  );
};

export default ProductDetailScreen;
