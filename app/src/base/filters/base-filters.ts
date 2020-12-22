import Vue from 'vue'
import moment from 'moment';

Vue.filter('money', function (value: number | string) {
  if (typeof value === 'string') {
    value = parseFloat(value);
  }
  if (typeof value !== "number") {
    return value;
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  return formatter.format(value);
});

Vue.filter('dateTime', function (value: string | Date | moment.Moment) {
  if (typeof value === 'string' || value instanceof Date) {
    value = moment(value);
  }
  if (moment.isMoment(value)) {
    return value.format('LLL');
  }
  return value;
});
