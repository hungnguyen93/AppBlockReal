import {
  StyleSheet,
} from 'react-native';
import { width, height } from 'react-native-dimension';

const styles = StyleSheet.create({
  viewHomeHeader: {
    flex:1,
    backgroundColor: '#EBECEE',
    marginTop: 20,
    alignItems: 'center',
  },
  viewHomeFooter: {
    width: width(100),
    height: height(12),
    flexDirection: 'row',
    justifyContent:'space-between',
   alignItems:'center'
  },
  icBL: {
    width: width(31),
    height: height(11),
    marginTop: 20
  },
  
  viewMBCTDK: {
    backgroundColor: 'white',
    height:height(72),
    width:width(96),
    marginTop: height(3),
    // shadowOffset: { width: 3, height: 3, },
    // shadowColor: '#2D2D2D',
    // shadowOpacity: 0.5,
    // borderBottomWidth:0.2
  },
  text: {
    fontSize: 16,
    color: '#717A81',
    fontWeight: 'bold',
  },
});
export default styles;