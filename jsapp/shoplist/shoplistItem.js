import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, CheckBox, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

export default class ShoplistItem extends PureComponent {
    constructor(props){
        super(props);
        this.state = { editor: false, newName: '' };
    }

    openInPlaceEditor = () => {
        this.setState({
            editor: true,
            newName: this.props.name
        });
    }

    closeInPlaceEditor = () => {
        this.props.updateItemName(this.state.newName);

        this.setState({
            editor: false,
        });
    }

    onChange = () => {
        this.props.toggleItem();
    }

    render () {
        return (
            <View style={styles.container} >
                <CheckBox value={this.props.selected} onValueChange={this.onChange}/>
                {this.state.editor ? <TextInput autoFocus onBlur={this.closeInPlaceEditor} style={styles.text} onChangeText={(newName) => this.setState({newName})} value={this.state.newName} /> : (<Text style={styles.text} onPress={this.openInPlaceEditor}>{this.props.name}</Text>)}
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
    updateItemName: PropTypes.func.isRequired,
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
