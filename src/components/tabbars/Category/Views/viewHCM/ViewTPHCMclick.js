import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import ButtonDiaDiem from '../../../../../buttons/ButtonDiaDiem'
import ButtonDiaDiem1 from '../../../../../buttons/ButtonDiaDiem1'
import styleCategory from '../../CategoryStyle';
import ButtonCheckBox from '../../../../../buttons/ButtonCheckBox';
import Q1 from './Quan/Q1';
export default class ViewTPHCMclick extends Component {
    render() {
        const { containerDiaDIem, bodyLeft, bodyRight,
        } = styleCategory;
        return (
            
                <View style={bodyRight}>
                    <Q1 />
                </View>
            
        );
    }
}