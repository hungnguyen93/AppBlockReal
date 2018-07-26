import React, { Component } from 'react';
import {
    View, Image, Text, TouchableOpacity, ScrollView
} from 'react-native';
import test from '../../../medias/test.png';
import style from './Style';

class MuaBan extends Component {
    render() {
        const {
            Container, viewSearch, btnSearch, icSearch, textSearch,
            viewImage, imageStyle
        } = style;
        return (
            <View style={Container} >
                <View style={viewSearch}>
                    <TouchableOpacity style={btnSearch}>
                        <Image source={require('../../../medias/icSearch.png')}
                            style={icSearch}
                        />
                        <Text style={textSearch}>Tìm kiếm bất động sản</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={viewImage}>
                        <Image source={test}
                            style={imageStyle}
                        />
                    </View>
                    <View style={viewImage}>
                        <Image source={test}
                            style={imageStyle}
                        />
                    </View>
                    <View style={viewImage}>
                        <Image source={test}
                            style={imageStyle}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default MuaBan;