import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput  } from 'react-native';
import { Icon } from 'react-native-elements';

export default class ItemAdder extends Component {
    constructor(props) {
        super(props);
        this.state = { text:'' };
    }

    onAddPressed = () => {
        this.props.addItem(this.state.text);
        this.setState({
            text: ''
        });
    }

    render () {
        const disabled = !this.state.text;
        const buttonColor = disabled ? "#c6c6c6" : "#6c6d6c";

        return (
            <View style={styles.container}>
                <TextInput style={styles.itemName}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder={"Enter name..."}
                />

                <Icon
                    color={buttonColor} 
                    name='add-circle'
                    onPress={this.onAddPressed}
                    disabled={disabled}
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
