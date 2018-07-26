import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import styleCategory from '../../CategoryStyle';
export default class ViewChungCu extends Component {
    render() {
        const { bodyRight, text
        } = styleCategory;
        return (
            <View style={bodyRight}>
                <Text style={text}>CC HAGL</Text>
                <Text style={text}>Master Thảo Điền</Text>
                <Text style={text}>Vinhomes Center Park</Text>
                <Text style={text}>Sunrise City</Text>
                <Text style={text}>Masteri An Phú</Text>
                <Text style={text}>Florita</Text>
                <Text style={text}>Phú Hoàng Anh</Text>
            </View>
        );
    }
}