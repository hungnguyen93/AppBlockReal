import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import ButtonDiaDiem from '../../../buttons/ButtonDiaDiem'
import styleCategory from '../Category/CategoryStyle';
import ViewChungCu from './Views/viewLoaiBDS/viewChungCu';
export default class ViewTPHCMclick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckChungCu: false,
        }
    }
    render() {
        const { containerDiaDIem, bodyLeft } = styleCategory;
        const CC = this.state.isCheckChungCu ? <ViewChungCu/> : null;
        const color = this.state.isCheckChungCu ? 'red' : '#1E4156';
        return (
            <View style={containerDiaDIem}>
                <View style={bodyLeft}>
                    <ButtonDiaDiem 
                    text='CHUNG CƯ' 
                    onPress={this.clickCC}
                    style={{color}}
                    />
                    <ButtonDiaDiem text='NHÀ' />
                    <ButtonDiaDiem text='ĐẤT NỀN' />
                    <ButtonDiaDiem text='KHO - XƯỞNG' />
                    <ButtonDiaDiem text='RESORT' />
                    <ButtonDiaDiem text='BDS KHÁC' />
                </View>
                {CC}
            </View>
        );
    }
    clickCC = () => {
        this.setState({
            isCheckChungCu: !this.state.isCheckChungCu,
        });
    };
}