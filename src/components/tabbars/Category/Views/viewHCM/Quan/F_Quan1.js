import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import StyleQuan from './StyleQuan';
import ButtonCheckBoxQuan from '../../../../../../buttons/ButtonCheckBoxQuan';

export default class F_Quan1 extends Component {
    render() {
        const { Container } = StyleQuan;
        return (
            <View style={Container}>
                <ButtonCheckBoxQuan name="Phường Tân Định" />
                <ButtonCheckBoxQuan name="Phường Đa Kao" />
                <ButtonCheckBoxQuan name="Phường Bến Nghé" />
                <ButtonCheckBoxQuan name="Phường Bến Thành" />
                <ButtonCheckBoxQuan name="Phường Nguyễn Thái Bình" />
                <ButtonCheckBoxQuan name="Phường Phamj Ngũ Lão" />
                <ButtonCheckBoxQuan name="Phường Cầu Ông Lãnh" />
                <ButtonCheckBoxQuan name="Phường Nguyễn Cư Trinh" />
                <ButtonCheckBoxQuan name="Phường Cầu Kho" />
            </View>
        );
    }
}