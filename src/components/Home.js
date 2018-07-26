import React, { Component } from 'react';
import {
     View, Image,
} from 'react-native';
import styles from '../styles/HomeContainer';
import icBR from '../medias/icBR.png';
import TabbarHome from './tabbars/TabbarHome';

export default class Home extends Component {
    render() {
        const { viewHomeHeader, viewMBCTDK, icBL } = styles;

        return (
                <View style={viewHomeHeader}>
                    <View>
                        <Image source={icBR} style={icBL}></Image>
                    </View>
                    <View style={viewMBCTDK}>
                        <TabbarHome />
                    </View>
                </View>
        );
    }
}