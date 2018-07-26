import {
    StyleSheet,
} from 'react-native';
import { width, height } from 'react-native-dimension';

const StyleQuan = StyleSheet.create({
    Container: {
        height: height(46),
        width: width(43),
        marginLeft: height(6),
    },
    //----------ButtonCheckBoxQuan -----------//

    viewCheck: {
        flexDirection: 'row',
        height: height(4),
        width: width(42),
        
        alignItems: 'center',
        marginTop: height(1)
    },
    check: {
        width: width(5.5),
        height: height(3),
        borderRadius: 4,
        marginRight: 10,
        borderColor: '#C2C2C2',
        borderWidth: 0.5
    },
    textCheck: {
        fontSize: 12,
        color: '#1E4156',

    },
});
export default StyleQuan;