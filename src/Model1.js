import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import Page1 from './model1/Page1';
import Page2 from './model1/Page2';

const StackNavigator = createStackNavigator({
    Home: Page1,
    About: Page2
})

export default class Model1 extends React.Component {
    render() {
        return (
            <StackNavigator />
        );
    }
}
