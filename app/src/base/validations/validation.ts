import { extend } from "vee-validate";
import { email } from 'vee-validate/dist/rules';

extend('email', {
  ...email,
  message: 'This is not a valid email.'
})

extend('req', {
  validate(value) {
    return !!value;
  },
  computesRequired: true,
  message: 'This field is required.'
});

extend('min', {
  validate(value, { length }) {
    if (value.length >= length) {
      return true;
    }
    return `This field must be at least ${length} characters long.`;
  },
  params: ['length']
});

extend('max', {
  validate(value, { length }) {
    if (value.length <= length) {
      return true;
    }
    return `This field must be a maximum of ${length} characters.`;
  },
  params: ['length']
});

extend('minmax', {
  validate(value, { min, max }: any) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max'],
  message: 'The {_field_} field must be at least {min} characters and a maximum of {max} characters.'
});
