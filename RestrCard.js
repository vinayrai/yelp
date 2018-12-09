import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffff',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    title: {

    },
    address: {

    }
});

export default function RestrCard( {business} ) {
    return (
        <View style={styles.card}>
            <View style={styles.name}>
                <Text>{business.name}</Text>
            </View>
            <View style={styles.location}>
                <Text>{business.location.display_address}</Text>
            </View>
        </View>
    );
}