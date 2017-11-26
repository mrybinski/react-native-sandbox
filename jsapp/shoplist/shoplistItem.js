import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, CheckBox, Text  } from 'react-native';

export default class ShoplistItem extends PureComponent {
    onChange = () => {
        this.props.toggleItem();
    }

    render () {
        return (
            <View style={styles.container}>
                <CheckBox value={this.props.selected} onValueChange={this.onChange}/><Text> {this.props.name} </Text>
            </View>
        );
    }
}

ShoplistItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    toggleItem: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});
