import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import styleCategory from '../../../CategoryStyle';
import ButtonCheckBoxClick from '../../../../../../buttons/ButtonCheckBoxClick';
import ButtonCheckBox from '../../../../../../buttons/ButtonCheckBox';
import F_Quan1 from './F_Quan1';
export default class Q1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckQ1: false,
        };
    };
    render() {
        const { bodyRight } = styleCategory;
        const Q1 = this.state.isCheckQ1 ? <F_Quan1/> : null;
        return (
                <View style={bodyRight}>
                    <ButtonCheckBox 
                    name="Quận 1"
                    onPress={this.clickQ1}
                    />
                    {Q1}
                    <ButtonCheckBox name="Quận 2"/>
                    <ButtonCheckBox name="Quận 3"/>
                    <ButtonCheckBox name="Quận 4"/>
                    <ButtonCheckBox name="Quận 5"/>
                    <ButtonCheckBox name="Quận 6"/>
                    <ButtonCheckBox name="Quận 7"/>
                    <ButtonCheckBox name="Quận 8"/>
                    <ButtonCheckBox name="Quận 9"/>
                    <ButtonCheckBox name="Quận 10"/>
                    <ButtonCheckBox name="Quận 11"/>
                    <ButtonCheckBox name="Quận 12"/>
                </View>
          
        );
    }
    clickQ1 = () => {
        this.setState({
            isCheckQ1: !this.state.isCheckQ1,
        });
    };
}