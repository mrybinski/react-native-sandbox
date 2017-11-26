import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, CheckBox, Text, Button  } from 'react-native';

export default class ShoplistItem extends PureComponent {
    onChange = () => {
        this.props.toggleItem();
    }

    render () {
        console.warn('rerender');
        return (
            <View style={styles.container}>
                <CheckBox value={this.props.selected} onValueChange={this.onChange}/><Text> {this.props.item.name} </Text>
                <Button onPress={this.props.remove} title={"remove"} />
            </View>
        );
    }
}

ShoplistItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    selected: PropTypes.bool.isRequired,
    toggleItem: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});
