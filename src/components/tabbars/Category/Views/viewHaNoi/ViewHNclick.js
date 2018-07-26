import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import styleCategory from '../../CategoryStyle';
import ButtonCheckBox from '../../../../../buttons/ButtonCheckBox';
export default class ViewHNclick extends Component {
    render() {
        const { bodyRight,
        } = styleCategory;
        return (
                <View style={bodyRight}>
                    <ButtonCheckBox name="Quận 1" />
                    <ButtonCheckBox name="Quận 2" />
                    <ButtonCheckBox name="Quận 3" />
                    <ButtonCheckBox name="Quận 4" />
                    <ButtonCheckBox name="Quận 5" />
                    <ButtonCheckBox name="Quận 6" />
                    <ButtonCheckBox name="Quận 7" />
                    <ButtonCheckBox name="Quận 8" />
                    <ButtonCheckBox name="Quận 9" />
                    <ButtonCheckBox name="Quận 10" />
                    <ButtonCheckBox name="Quận 11" />
                    <ButtonCheckBox name="Quận 12" />
                </View>
        );
    }
}