import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import StyleQuan from '../components/tabbars/Category/Views/viewHCM/Quan/StyleQuan';

export default class ButtonCheckBoxQuan extends Component {
    render() {
        const {  viewCheck,
            check, touchStyle, textCheck,
        } = StyleQuan;
        return (
            <TouchableOpacity style={touchStyle}>
                <View style={viewCheck}>
                    <View style={check} />
                    <Text style={textCheck}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
