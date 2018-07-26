import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
} from 'react-native';
import styleCategory from '../components/tabbars/Category/CategoryStyle';
class ButtonDiaDiem1 extends Component {
    render() {
        const { btnStyle, btnView, btnText1 } = styleCategory;
        return (
            <TouchableOpacity style={btnStyle}
                onPress={this.props.clickHN}
            >
                <View style={btnView}>
                    <Text style={btnText1}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export default ButtonDiaDiem1;

