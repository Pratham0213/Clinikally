import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import CountdownTimer from '../components/CountdownTimer';
import moment from 'moment';

export default function DeliveryScreen({ route }) {
  const { product } = route.params;
  const [pincode, setPincode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const cutoffTimeProviderA = moment().endOf('day').subtract(7, 'hours');
  const cutoffTimeProviderB = moment().startOf('day').add(9, 'hours');

  const handleCheckDelivery = () => {
    // Check provider based on pincode
    // Simulate stock and cutoff time checks
    if (pincode === 'ProviderA') {
      if (moment().isBefore(cutoffTimeProviderA)) {
        setDeliveryDate('Same-day delivery available');
      } else {
        setDeliveryDate('Delivery tomorrow');
      }
    } else if (pincode === 'ProviderB') {
      if (moment().isBefore(cutoffTimeProviderB)) {
        setDeliveryDate('Same-day delivery available');
      } else {
        setDeliveryDate('Delivery tomorrow');
      }
    } else {
      setDeliveryDate('Delivery in 2-5 days');
    }
  };

  return (
    <View>
      <Text>Selected Product: {product.name}</Text>
      <Text>MRP: {product.price}</Text>
      <TextInput placeholder="Enter Pincode" value={pincode} onChangeText={setPincode} keyboardType="numeric" />
      <Button title="Check Delivery" onPress={handleCheckDelivery} />
      {deliveryDate && <Text>Estimated Delivery Date: {deliveryDate}</Text>}
      {pincode === 'ProviderA' && <CountdownTimer cutoffTime={cutoffTimeProviderA} />}
      {pincode === 'ProviderB' && <CountdownTimer cutoffTime={cutoffTimeProviderB} />}
    </View>
  );
}
