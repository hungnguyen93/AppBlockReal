import {
    StyleSheet,
    Image, Text, View
} from 'react-native';
import React, { Component } from 'react';
import {  height } from 'react-native-dimension';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DiaDiem from './Category/DiaDiem';
import LoaiBDS from './Category/LoaiBDS';
export default class TabbarCeragory extends Component {
    render() {
        return (
            <ScrollableTabView
                tabBarActiveTextColor='red'
                tabBarInactiveTextColor='gray'
                tabBarUnderlineStyle={{ backgroundColor: 'red', height: height(0) }}
                initialPage={0}
                tabBarTextStyle={{
                    fontSize: height(2.2),
                    fontFamily: 'Avenir',
                    fontWeight: '700',
                    marginTop: height(1)

                }}
            >
                <DiaDiem tabLabel="ĐỊA ĐIỂM" />
                <LoaiBDS tabLabel="LOẠI BẤT ĐỘNG SẢN" />
            </ScrollableTabView>
        );
    }
}

