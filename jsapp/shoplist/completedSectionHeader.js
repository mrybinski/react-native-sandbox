import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class CompletedSectionHeader extends PureComponent {
    
    render () {
        const icon = this.props.collapsed ? 'keyboard-arrow-up' : 'keyboard-arrow-down';
        return (
            <View style={styles.container}>
                <Icon containerStyle={styles.icon} color={"#6c6d6c"} name={icon} onPress={this.props.onToggle}/>
                <Text style={styles.text} onPress={this.props.onToggle} >{`${this.props.itemsCount} completed items`}</Text>
                {this.props.collapsed ? <Icon style={styles.removeIcon} onPress={this.props.remove} color={"#6c6d6c"} name='cancel' />
                    : null}
            </View>
        );
    }
}

CompletedSectionHeader.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    collapsed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: "#c1c1c1",
        marginTop: 20,
        paddingTop: 3
    },
    text: {
        flex: 2,
        color: "#6c6d6c",
    },
    icon: {
        flex: -1,
        paddingHorizontal: 3
    },
    removeIcon: {
        flex: -1,
        paddingHorizontal: 20
    }
});
