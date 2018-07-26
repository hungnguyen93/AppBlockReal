import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView
} from 'react-native';
import styles from '../Style';
import TIP from '../../../../textInput/TIP';
import ThemeLogin from '../../../../styles/LoginContainer';
import { height } from 'react-native-dimension';
class DKTiepThiBDSclick extends Component {
    render() {
        const {
            viewContainer, body, text1, viewEmail1
        } = styles;
        const {
            text, viewEmail, viewLogin, textLogin, viewEnd, textQuenMK
        } = ThemeLogin;
        return (
            <View style={ viewContainer}>
                <ScrollView>
                    <View style={body }>
                        <Text style={[text, text1]} >ĐĂNG KÝ TIẾP THỊ BẤT ĐỘNG SẢN</Text>
                        <View style={[viewEmail, {marginTop:height(2)}]}>
                            <TIP text='Tên của bạn'
                            />
                        </View>
                        <View style={[viewEmail, viewEmail1]}>
                            <TIP text='Số điện thoại'
                            />
                        </View>
                        <View style={[viewEmail, viewEmail1]}>
                            <TIP text='Email đăng ký'
                            />
                        </View>
                        <View style={[viewEmail, viewEmail1]}>
                            <TIP text='Mật Khẩu'
                                security={true}
                            />
                        </View>
                        <TouchableOpacity >
                            <View style={viewLogin}>
                                <Text style={textLogin}>ĐĂNG KÝ TÀI KHOẢN</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={viewEnd}>
                            <Text style={textQuenMK}>Bán đã có tài khoản, vui lòng đăng nhập </Text>
                            <TouchableOpacity>
                                <Text style={[textQuenMK,{ textDecorationLine:'underline' }]}>tại đây</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default DKTiepThiBDSclick;