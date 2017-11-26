import React, { Component } from 'react';
import ShopListItem from './shoplistItemContainer';
import ItemAdder from './itemAdderContainer';
import PropTypes from 'prop-types';
import { is, List } from 'immutable';

import { StyleSheet, ListView, View } from 'react-native';

export default class ShopList extends Component {
    constructor (props) {
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => !is(r1, r2)
        });

        ds = ds.cloneWithRows(this.props.items.toArray());

        this.state = {
            dataSource: ds
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.items.toArray())
        });
    }

    render () {
        return (
            <View style={styles.container} >
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem}
                    style={styles.listView}
                />

                <ItemAdder/>
            </View>
        );
    }

    renderItem (item) {
        return (
            <ShopListItem id={item.id} name={item.name} />
        );
    }
}

ShopList.propTypes = {
    items: PropTypes.instanceOf(List)
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
        
    },
    listView: {
        flex: 2,
        backgroundColor: '#F5FCFF',
        alignSelf: 'stretch',
    }
});
