import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import ViewTPHCM from './Views/viewHCM/ViewTPHCM';
export default class DiaDiem extends Component {
    render() {
        return (
            <View>
               <ViewTPHCM/>
            </View>
        );
    }
}