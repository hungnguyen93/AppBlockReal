import {
    StyleSheet,
    Image, Text, View
} from 'react-native';
import React, { Component } from 'react';
import { height } from 'react-native-dimension';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MuaBan from './tabbarMuaBanDangKy/MuaBan';
import ChoThue from './tabbarMuaBanDangKy/ChoThue';
import DangKy from './tabbarMuaBanDangKy/DangKy';
export default class TabbarHome extends Component {
    render() {
        return (
            <ScrollableTabView
                tabBarActiveTextColor='red'
                tabBarInactiveTextColor='gray'
                tabBarUnderlineStyle={{ backgroundColor: 'red', height: height(0.2) }}
                tabBarTextStyle={{
                    fontSize: height(2.2),
                    fontFamily: 'Avenir',
                    fontWeight: '700',
                    marginTop: height(1)
                }}
            >
                <MuaBan tabLabel="MUA BÁN" />
                <ChoThue tabLabel="CHO THUÊ" />
                <DangKy tabLabel="ĐĂNG KÝ" />
            </ScrollableTabView>
        );
    }
}

