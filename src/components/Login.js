import React, { Component } from 'react';
import {
    View, Image, TouchableOpacity, Text,
    
} from 'react-native';
import styles from '../styles/HomeContainer';
import icBR from '../medias/icBR.png';
import ThemeLogin from '../styles/LoginContainer';
import TIP from '../textInput/TIP';
export default class Login extends Component {
    render() {
        const {
            viewContainer, text, viewEmail, viewLogin,
            textLogin, viewQuenMK, viewEnd,
            textQuenMK,
        } = ThemeLogin
        return (
            <View>
                <View style={styles.viewHomeHeader}>
                    <Image source={icBR} style={styles.icBL}></Image>
                    <View style={viewContainer}>
                        <Text style={text} >ĐĂNG NHẬP TÀI KHOẢN</Text>
                        <View style={viewEmail}>
                           <TIP text='Email / Số điện thoại'
                            />
                        </View>
                        <View style={viewEmail}>
                            <TIP text='Mật Khẩu'
                                security={true}
                            />
                        </View>
                        <TouchableOpacity >
                            <View style={viewLogin}>
                                <Text style={textLogin}>ĐĂNG NHẬP</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={viewQuenMK}>
                            <TouchableOpacity>
                                <Text style={[textQuenMK, {textDecorationLine:'underline'}]}>Quên mật khẩu</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={viewEnd}>
                            <Text style={textQuenMK}>Chưa phải là thành viên, </Text>
                            <TouchableOpacity>
                                <Text style={[textQuenMK, {textDecorationLine:'underline'}]}>đăng ký tài khoản</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}