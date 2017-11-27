import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, CheckBox, Text  } from 'react-native';
import { Icon } from 'react-native-elements';

export default class ShoplistItem extends PureComponent {
    onChange = () => {
        this.props.toggleItem();
    }

    render () {
        return (
            <View style={styles.container}>
                <CheckBox value={this.props.selected} onValueChange={this.onChange}/>
                <Text style={styles.text}> {this.props.name} </Text>
                <Icon style={styles.icon} onPress={this.props.remove} color={"#6c6d6c"} name='cancel' />
            </View>
        );
    }
}

ShoplistItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
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
    },
    text: {
        flex: 2,
    },
    icon: {
        flex: -1,
        marginHorizontal: 20
    }
});
