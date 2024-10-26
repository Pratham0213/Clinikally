// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';

const CountdownTimer = ({ cutoffHour }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const cutoffTime = moment().set({ hour: cutoffHour, minute: 0, second: 0 });
      
      const duration = moment.duration(cutoffTime.diff(now));
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [cutoffHour]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>Order within: {timeLeft}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  timerText: { fontSize: 16, color: 'red' },
});

export default CountdownTimer;
