import React, { Component } from 'react';
import {
    View, 
    TextInput
} from 'react-native';
import styles from '../styles/HomeContainer';
class TIP extends Component {
    render() {
        const { viewEmail } = styles
        return (
            <View style={viewEmail}>
                <TextInput
                    placeholder={this.props.text}
                    onChangeText={this.props.onChangeText}
                    secureTextEntry={this.props.security}
                ></TextInput>
            </View>
        );
    }
}
export default TIP;
