import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import styleCategory from '../components/tabbars/Category/CategoryStyle';

export default class ButtonCheckBoxClick extends Component {
    render() {
        const {  viewCheck,
            check, touchStyle, textCheck, icCheck, viewIcCheck
        } = styleCategory;
        return (
            <TouchableOpacity style={touchStyle}>
                <View style={viewCheck}>
                    <View style={check} />
                    <Text style={textCheck}>{this.props.name}</Text>
                    <View style={viewIcCheck}>
                        <Text style={icCheck}>∧</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
