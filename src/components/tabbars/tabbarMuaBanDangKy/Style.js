import {
    StyleSheet,
} from 'react-native';
import { width, height } from 'react-native-dimension';

const style = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#EBECEE',
    },
    viewSearch: {
        width: width(96),
        backgroundColor: 'white',
        shadowOffset: { width: 3, height: 2, },
        shadowColor: '#2D2D2D',
        shadowOpacity: 0.3,
        // borderBottomWidth: 0.2,
        marginBottom:height(1)
    },
    btnSearch: {
        width: width(96),
        height: height(6),
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: height(3)
    },
    icSearch: {
        width: width(5), height: height(3)
    },
    textSearch: {
        fontSize: 15,
        color: '#717A81',
       // fontWeight: 'bold',
        paddingLeft: 16
    },
    viewImage: {
        width: width(96),
        marginBottom: height(1)
    },
    imageStyle: {
        width: width(96),
        height: height(30)
    },
    //-------Dang Ky-----------//
    btnView: {
        width: width(96),
        height: height(6),
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingLeft: height(3.5),
        shadowOffset: { width: 2, height: 3, },
        shadowColor: '#2D2D2D',
        shadowOpacity: 0.3,
        // borderBottomWidth: 0.2
    },
    btnText: {
        fontSize:height(2.2),
        fontWeight:'bold',
        color:'#1E4156'
    },
    btnStyle: {
        // marginBottom:height(1),
        marginTop:height(1),
    },
    viewContainer:{
        width: width(96),
        height: height(44),
        backgroundColor: 'white',
        alignItems: 'center',
    },
    body:{
        // marginTop: height(0.5), 
        // marginBottom: height(1),
        
        width: width(96),
        height: height(50),
        backgroundColor: 'white',
        // marginBottom: height(3),
        alignItems: 'center',
       
    },
    text1:{
        fontSize:16 
    },
    viewEmail1:{
        marginTop:height(1)
    },
});
export default style;