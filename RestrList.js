import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import RestrCard from './RestrCard';

import { performSearch } from './api';

class RestrList extends React.Component {
    state = {
        businesses: []
    }

    componentDidMount() {
        parameters = {'location': "NYC"};
        performSearch(parameters).then(businesses => { 
            console.log(businesses)
            this.setState({businesses});
        })
    }

    render() {
        return (
            <FlatList
                data = {this.state.businesses}
                keyExtractor = {item => item.id}
                renderItem={({ item, separators }) => (
                    <RestrCard
                        business = {item}
                    />
                )}
            />
        );
    }
}

export default RestrList;