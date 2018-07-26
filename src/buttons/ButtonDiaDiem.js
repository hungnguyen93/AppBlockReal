import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
} from 'react-native';
import styleCategory from '../components/tabbars/Category/CategoryStyle';
class ButtonDiaDiem extends Component {
    render() {
        const { btnStyle, btnView, btnText } = styleCategory;
        return (
            <TouchableOpacity style={btnStyle}
                onPress={this.props.onPress}
            >
                <View style={btnView}>
                    <Text style={[btnText,this.props.style]}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export default ButtonDiaDiem;

