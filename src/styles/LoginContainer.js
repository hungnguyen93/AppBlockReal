import {
    StyleSheet,
} from 'react-native';
import { width, height } from 'react-native-dimension';
const styles = StyleSheet.create({
    viewContainer: {
        width: width(96),
        height: height(50),
        backgroundColor: 'white',
        marginTop: height(3),
        alignItems: 'center',
        shadowOffset: { width: 3, height: 3, },
        shadowColor: '#2D2D2D',
        shadowOpacity: 0.2,

    },
    text: {
        fontSize: 20,
        color: '#243E51',
        marginTop: height(3),
        fontWeight: 'bold',

    },
    viewEmail:{
        width:width(80),
        height:height(5),
        borderWidth:0.4,
        borderRadius: height(1),
        justifyContent:'center',
        marginTop:height(4),
        paddingHorizontal:10
    },
    viewLogin:{
        width:width(80),
        height:height(5),
        borderWidth:0.4,
        borderRadius: height(1),
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        paddingHorizontal:10,
        backgroundColor:'#243E51',
    },
    textLogin:{
        color:'white',
    },
    textQuenMK:{
        fontSize:11,

    },
    viewQuenMK:{
        alignItems:'flex-end',
        width:width(80),
        height:height(5),
        marginTop:height(2)
    },
    viewEnd:{
        width:width(80),
        height:height(5),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:height(2)

    }

});
export default styles;
