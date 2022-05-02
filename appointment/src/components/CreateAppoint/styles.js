import {StyleSheet} from 'react-native';
import colors from '../../styles/theme/colors';
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primary,
    padding: 10,
    borderBottomWidth: 1,

  },
  headerText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    padding: 10,
    flex: 1,
  },

  NameInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,

    margin: 10,
    borderRadius: 5,
  },
  OtherInfoContainer: {
    flex: 1,  
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    margin:10,
    borderRadius: 5,



  },
});

export default styles;
