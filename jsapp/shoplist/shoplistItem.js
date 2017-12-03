import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, CheckBox, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

export default class ShoplistItem extends PureComponent {
    constructor(props){
        super(props);

        this.state = Object.assign({}, { editor: false, newName: '' }, this.calculateNextState(props));
    }

    componentWillReceiveProps(nextProps){
        const stateChange = this.calculateNextState(nextProps);
        if(stateChange){
            this.setState(stateChange);
        }
    }

    calculateNextState(props){
        if(!props.name){
            return {
                editor: true,
                newName: ''
            };
        }
    }

    openInPlaceEditor = () => {
        this.setState({
            editor: true,
            newName: this.props.name
        });
    }

    closeInPlaceEditor = () => {
        if(this.state.newName){
            this.props.updateItemName(this.state.newName);
            this.setState({
                editor: false,
            });
        } else {
            this.props.remove();
        }
    }

    onChange = () => {
        if(this.state.editor){
            this.closeInPlaceEditor();
        }
        this.props.toggleItem();
    }

    onNameChange = (newName) => {
        this.setState({newName});
    }

    render () {
        return (
            <View style={styles.container} >
                <CheckBox value={this.props.selected} onValueChange={this.onChange}/>
                {this.state.editor ? 
                    <TextInput  underlineColorAndroid='rgba(0,0,0,0)' autoFocus blurOnSubmit returnKeyType='done' onBlur={this.closeInPlaceEditor} style={styles.textInput} onChangeText={this.onNameChange} value={this.state.newName} /> 
                    : (<Text style={styles.text} onPress={this.openInPlaceEditor}>{this.props.name}</Text>)}
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
        alignItems: 'center',
    },
    text: {
        flex: 2,
        color: "#6c6d6c",
    },
    textInput: {
        flex: 2,
        color: "#6c6d6c",
        padding: 0
    },
    icon: {
        flex: -1,
        marginHorizontal: 20
    }
});
