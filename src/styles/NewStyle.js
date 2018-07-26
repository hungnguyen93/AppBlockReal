import {
    StyleSheet,
} from 'react-native';
import { width, height } from 'react-native-dimension';

const NewStyle = StyleSheet.create({
    container: {
        height: height(48),
        width: width(96),
        backgroundColor: 'white',
        marginTop: height(3),
        shadowOffset: { width: 3, height: 3, },
        shadowColor: '#2D2D2D',
        shadowOpacity: 0.4,
        marginLeft: height(1.2)
    },
    scroolView: {
        width: width(100),
        marginTop: height(3),
        marginBottom: height(1),

    },
    //-------Body--------//

    header: {
        height: height(4),
        width: width(50),
        justifyContent: 'center',
        marginTop: height(1),
        marginLeft: height(2),

    },
    textHeader: {
        fontSize: 16,
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        color: '#1E4156'

    },
    footer: {
        flex: 1,
        margin: height(2),
        marginTop: height(0),
        marginBottom: height(1),

    },
    textFooter: {
        color: '#1E4156',
        fontFamily: 'Avenir',
        fontSize: height(2),

    },
});
export default NewStyle;