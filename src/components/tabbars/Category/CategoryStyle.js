import {
    StyleSheet,
} from 'react-native';
import { width, height } from 'react-native-dimension';

const styleCategory = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: height(3),
    },
    containerDiaDIem: {
        flexDirection: 'row',
    },
    bodyLeft: {
        height:height(64),
        width:width(40),
        alignItems:'center',
        shadowOffset: { width: 3, height: 3, },
        shadowColor: '#2D2D2D',
        shadowOpacity: 0.4,
        backgroundColor:'white',
        justifyContent: 'space-around'
    },
    bodyRight:{
        flex:1,
       
    },
    text:{
        marginTop:height(5), 
        marginLeft:height(5),
        color:'#1E4156',
        fontWeight:'400'
    },
    //---------btnDiaDIem---------------// ∨∧∨
    btnStyle: {
        marginTop:height(1),

    },
    btnView: {
        height: height(3),
        width: width(34),
      
    },
    btnText: {
        fontSize: 15,
        fontFamily: 'Avenir',
        color:'#1E4156',
        fontWeight:'bold',
    },
    btnText1: {
        fontSize: 15,
        fontFamily: 'Avenir',
        color:'red',
        fontWeight:'bold',
    },
    //----------ButtonCheckBox -----------//

    touchStyle:{
    },
    viewCheck:{
        flexDirection:'row',
        height:height(5),
        width:width(54),
        backgroundColor:'white',
        shadowOffset: { width:3, height:3 },
        shadowColor: '#2D2D2D',
        shadowOpacity: 0.2,
        marginLeft:height(2),
        marginTop:height(0.3),
        alignItems:'center',
        paddingLeft:10

    },
    check:{
        width:width(5.5),
        height:height(3),
        borderRadius:4,
        marginRight:10,
        borderColor:'#C2C2C2',
        borderWidth:0.5
    },
    textCheck:{
        fontSize: 15,
        color:'#1E4156',
        
    },
    viewIcCheck:{
        flex:1,
        alignItems:'flex-end', 
        paddingRight:height(1),
    },
    icCheck:{
        color:'#C2C2C2',
        fontSize:height(1.5)
    }

});
export default styleCategory;