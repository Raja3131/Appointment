import {StyleSheet} from 'react-native';
import colors from '../../../styles/theme/colors';

const styles = StyleSheet.create({
  containerStyle: {
  },
  inputStyle: {
    color: colors.green,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 14,
    borderColor: colors.green,
    borderBottomWidth: 1,
  },

  labelStyle: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
