import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Page1 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtTilte}>Home</Text>
                <Button
                    title='Ir para About'
                    onPress={() => navigation.navigate('About') }
                />
            </View>
        );
    }
}

Page1.navigationOptions = {
    title: 'Home',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtTilte: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});
