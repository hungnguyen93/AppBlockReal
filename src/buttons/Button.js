import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
} from 'react-native';
import styles from '../components/tabbars/tabbarMuaBanDangKy/Style';
class Button extends Component {
    render() {
        const { btnStyle, btnView, btnText } = styles;
        return (
            <TouchableOpacity style={btnStyle}
                onPress={this.props.onPress}
            >
                <View style={btnView}>
                    <Text style={btnText}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export default Button;