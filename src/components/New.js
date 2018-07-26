import React, { Component } from 'react';
import {
    View, Text, Image, ScrollView
} from 'react-native';
import icBR from '../medias/icBR.png';
import test from '../medias/test.png';
import styles from '../styles/HomeContainer';
import NewStyle from '../styles/NewStyle';
import style from '../components/tabbars/tabbarMuaBanDangKy/Style';

class New extends Component {
    render() {
        const { viewHomeHeader, icBL } = styles;
        const { container, header, textHeader, footer, textFooter, scroolView } = NewStyle;
        const { viewImage, imageStyle } = style;
        return (
            <View style={viewHomeHeader}>
                <Image source={icBR} style={icBL}></Image>
                <ScrollView style={scroolView}>
                    <View style={container}>
                        <View style={header}>
                            <Text style={textHeader} >TIN THỊ TRƯỜNG</Text>
                        </View>
                        <View style={viewImage}>
                            <Image source={test}
                                style={imageStyle}
                            />
                        </View>
                        <View style={footer}>
                            <Text style={textFooter}>asdassdasdsadjsahdjsakdhksajdhkash
                            asdassdasdsadjsahdjsakdhksajdhkashasdas
                            asdassdasdsadjsahdjsakdhksajdhkash
                            sadsdsasasasasasasaskkkkš
                        </Text>
                        </View>
                    </View>
                    <View style={container}>
                        <View style={header}>
                            <Text style={textHeader} >TIN THỊ TRƯỜNG</Text>
                        </View>
                        <View style={viewImage}>
                            <Image source={test}
                                style={imageStyle}
                            />
                        </View>
                        <View style={footer}>
                            <Text style={textFooter}>asdassdasdsadjsahdjsakdhksajdhkash
                            asdassdasdsadjsahdjsakdhksajdhkashasdas
                            asdassdasdsadjsahdjsakdhksajdhkash
                            sadsdsasasasasasasaskkkkš
                        </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default New;