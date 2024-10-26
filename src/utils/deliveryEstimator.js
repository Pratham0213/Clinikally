// src/utils/deliveryEstimator.js
import moment from 'moment';

export const estimateDeliveryDate = (
  provider,
  currentTime,
  isStockAvailable,
) => {
  const currentHour = currentTime.hour();

  if (provider === 'Provider A') {
    if (currentHour < 17 && isStockAvailable) {
      return moment().format('MMM Do YYYY'); // Same-day delivery
    }
    return moment().add(1, 'day').format('MMM Do YYYY'); // Next-day delivery
  } else if (provider === 'Provider B') {
    if (currentHour < 9 && isStockAvailable) {
      return moment().format('MMM Do YYYY'); // Same-day delivery
    }
    return moment().add(1, 'day').format('MMM Do YYYY'); // Next-day delivery
  } else {
    // General Partners: delivery in 2-5 days based on location
    const regionDeliveryDays = 3; // Adjust this based on region logic if needed
    return moment().add(regionDeliveryDays, 'days').format('MMM Do YYYY');
  }
};
