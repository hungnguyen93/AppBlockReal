import React, { Component } from 'react';
import {
    View, Text, Image
} from 'react-native';
import icBR from '../medias/icBR.png';
import styles from '../styles/HomeContainer';
import styleCategory from './tabbars/Category/CategoryStyle';
import TabbarCeragory from './tabbars/TabbarCeragory';

class Category extends Component {
    render() {
        const {
            viewHomeHeader, icBL
        } = styles;
        const {
            Container,
        } = styleCategory;
        return (
            <View style={viewHomeHeader}>
                <Image source={icBR} style={icBL}></Image>

                <View style={Container}>
                    <TabbarCeragory/>
                </View>
            </View>

        );
    }
}
export default Category;
