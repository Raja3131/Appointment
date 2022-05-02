import {StyleSheet} from 'react-native';
import colors from '../../../styles/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,

    paddingHorizontal: 5,

    paddingVertical: 13,

    marginVertical: 5,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },

  loaderSection: {
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    width: '100%',
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});
