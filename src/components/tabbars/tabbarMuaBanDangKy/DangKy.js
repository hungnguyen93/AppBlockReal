import React, { Component } from 'react';
import {
    View, Image, Text, TouchableOpacity,
} from 'react-native';
import styles from './Style';
import DKTiepThiBDSclick from './DangKy/DKTiepThiBDSclick';
import Button from '../../../buttons/Button';


export default class DangKy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheck: false
        };
    };
    render() {
        const {
            Container, viewSearch, btnSearch, icSearch, textSearch,
        } = styles;
        const DK = this.state.isCheck ? <DKTiepThiBDSclick/> : null;
        return (
            <View style={Container} >
                <View style={[viewSearch, {marginBottom:0}]}>
                    <TouchableOpacity style={btnSearch}>
                        <Image source={require('../../../medias/icSearch.png')}
                            style={icSearch}
                        />
                        <Text style={textSearch}>Tìm kiếm bất động sản</Text>
                    </TouchableOpacity>
                </View>
                <Button text={'ĐĂNG KÝ TIẾP THỊ BẤT ĐỘNG SẢN'}
                    onPress={this.click}
                />
                {DK}
                <Button text={'ĐĂNG KÝ PHÂN PHỐI BẤT ĐỘNG SẢN'} />
                <Button text={'ĐĂNG KÝ CHỦ ĐẦU TƯ'} />
            </View>
        );
    }
    click = () => {
        this.setState({
            isCheck: !this.state.isCheck
        })
    }
}