import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    text: {
        height: 40,
        borderWidth: 1,
        margin: 0,
        marginLeft: 7,
        marginRight: 7,
        paddingLeft: 10,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
      buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

class RestrForm extends React.Component {
    state = {
        location: null,
    };

    handleChangeLocation = (text) => {
        this.setState({
            location: text,
        });
    }

    handleSearchPress = () => {
        this.props.navigation.navigate('list');
    }

    render() {
        return (
            <View>
                <View style={styles.fieldContainer}>
                    <TextInput
                        style={styles.text}
                        onChangeText={this.handleChangeLocation}
                        placeholder="Location"
                        spellCheck={false}
                        value={this.state.location}
                    />
                </View>

                <TouchableHighlight
                onPress={this.handleSearchPress}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Search</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default RestrForm;