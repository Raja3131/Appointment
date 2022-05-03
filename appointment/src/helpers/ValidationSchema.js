import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z ]+$/, 'Name is not valid')
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .test('is-name', 'Name must be alphabet', value => {
      return /^[a-zA-Z]+$/.test(value);
    })
    .trim(),

  age: Yup.string()
    .matches(/^[0-9]+$/, 'Age must be number')
    .required('Age is required')

    .test('mobile', 'Mobile number must be positive', value => {
      return value > 0;
    })
    .test('age', 'Age must be positive', value => {
      return value > 0;
    })
    .test('age', 'Age must be less than 120', value => {
      return value < 120;
    })
    .test('age', 'Age must be at least 0', value => {
      return value > 0;
    }),

  mobile: Yup.string()
    .matches(/^[0-9]+$/, 'Mobile number is not valid')
    .required('Mobile is required')
    .min(10, 'Mobile must be at least 10 characters')
    .typeError('Mobile must be a number')

    .test('mobile', 'Mobile number must be positive', value => {
      return value > 0;
    })
    .test('mobile', 'Mobile number must be an integer', value => {
      return value % 1 === 0;
    }),
});

export default ValidationSchema;
