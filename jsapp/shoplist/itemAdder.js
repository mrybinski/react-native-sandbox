import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Button  } from 'react-native';

export default class ItemAdder extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    onAddPressed = () => {
        this.props.addItem(this.state.text);
    }

    render () {
        return (
            <View style={styles.container}>
                <TextInput style={styles.itemName}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                <Button
                    onPress={this.onAddPressed}
                    title="Add"
                    color="#841584"
                />
            </View>
        );
    }
}

ItemAdder.propTypes = {
    addItem: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: -1,
        flexDirection: 'row',
    },
    itemName: {
        flex: 2,
    },
});
