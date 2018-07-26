import React, { Component } from 'react';
import {
    View, Image, Text, TouchableOpacity, ScrollView
} from 'react-native';
import test from '../../../medias/test.png';
import styles from './Style';
import { width, height } from 'react-native-dimension';

class ChoThue extends Component {
    render() {
        const {
            Container, viewSearch, btnSearch, icSearch, textSearch,
            viewImage, imageStyle
        } = styles;
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
export default ChoThue;