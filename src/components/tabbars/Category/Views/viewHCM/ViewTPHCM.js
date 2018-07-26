import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import ButtonDiaDiem from '../../../../../buttons/ButtonDiaDiem';
import styleCategory from '../../CategoryStyle';
import ViewTPHCMclick from './ViewTPHCMclick';
import ViewHNclick from '../viewHaNoi/ViewHNclick';
export default class ViewTPHCM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckHCM: false,
            isCheckHN: false,
        }
    }
    render() {
        const { containerDiaDIem, bodyLeft } = styleCategory;
        const HCM = this.state.isCheckHCM ? <ViewTPHCMclick/> : null;
        const HN = this.state.isCheckHN ? <ViewHNclick/> : null;
        const color = this.state.isCheckHCM ? 'red' : '#1E4156';
        return (
            <View style={containerDiaDIem}>
                <View style={bodyLeft}>
                    <ButtonDiaDiem 
                        text='TP HỒ CHÍ MINH'
                        onPress={this.clickHCM}
                        style={{color}}
                    />
                    <ButtonDiaDiem 
                        text='HÀ NỘI'
                        onPress={this.clickHN}
                    />
                    <ButtonDiaDiem text='CẦN THƠ' click={this.props.click} />
                    <ButtonDiaDiem text='ĐÀ NẴNG' click={this.props.click} />
                    <ButtonDiaDiem text='HẢI PHÒNG' click={this.props.click} />
                    <ButtonDiaDiem text='ĐỒNG NAI' click={this.props.click} />
                    <ButtonDiaDiem text='BÌNH DƯƠNG' click={this.props.click} />
                    <ButtonDiaDiem text='LONG AN' click={this.props.click} />
                </View>
                {HCM}
                {HN}
            </View>
        );
    }
    clickHCM = () => {
        this.setState({
            isCheckHCM: !this.state.isCheckHCM,
            isCheckHN: false,
        });
    };
    clickHN = () => {
        this.setState({
            isCheckHN: !this.state.isCheckHN,
            isCheckHCM: false,
        });
    };
}