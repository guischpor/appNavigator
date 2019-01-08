import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Page2 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtTilte}>About</Text>
            </View>
        );
    }
}

Page2.navigationOptions = {
    title: 'About',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtTilte: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});
