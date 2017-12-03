import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class InPlaceItemAdder extends PureComponent {
    
    render () {
        return (
            <View style={styles.container}>
                <Icon containerStyle={styles.icon} color={"#6c6d6c"} name='add' onPress={this.props.onAdd}/>
                <Text style={styles.text} onPress={this.props.onAdd} >Add item</Text>
            </View>
        );
    }
}

InPlaceItemAdder.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        flex: -1,
        color: "#6c6d6c",
    },
    icon: {
        flex: -1,
        paddingHorizontal: 3
    }
});
