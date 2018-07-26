import React, { Component } from 'react';
import {
    View, 
} from 'react-native';
import styles from '../Style';
import Button from '../../../../buttons/Button';
import ThemeLogin from '../../../../styles/LoginContainer';
import DKTiepThiBDSclick from './DKTiepThiBDSclick';
class DKTiepThiBDS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckTTBDS: false,
        };
    };
    render() {
        const {
            Container, viewSearch, btnSearch, icSearch, textSearch,
        } = styles;
        const {
            viewContainer,
            text, viewEmail, viewLogin, textLogin, viewEnd, textQuenMK
        } = ThemeLogin;
        const DK = this.state.isCheckHCM ? <DKTiepThiBDSclick/> : null;

        return (
            <View >
                    <Button text={'ĐĂNG KÝ TIẾP THỊ BẤT ĐỘNG SẢN'} 
                        onPress={this.click}
                    />
                    {DK}
                    <Button text={'ĐĂNG KÝ PHÂN PHỐI BẤT ĐỘNG SẢN'} />
                    <Button text={'ĐĂNG KÝ CHỦ ĐẦU TƯ'} />
            </View>

        );
    }
}
export default DKTiepThiBDS;