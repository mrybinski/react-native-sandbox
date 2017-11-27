import React, { Component } from 'react';
import ShopListItem from './shoplistItemContainer';
import ItemAdder from './itemAdderContainer';
import PropTypes from 'prop-types';

import { StyleSheet, ListView, View } from 'react-native';
import partition from 'lodash/partition';
import get from 'lodash/get';

export default class ShopList extends Component {
    constructor (props) {
        super(props);
        const toDoDataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                return r1.id !== r2.id;
            }
        });

        const completedDataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                return r1.id !== r2.id;
            }
        });

        this.state = this.calculateNextState(this.props, toDoDataSource, completedDataSource);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.calculateNextState(nextProps, this.state.toDoDataSource, this.state.completedDataSource));
    }

    calculateNextState(nextProps, toDoDataSource, completedDataSource){
        const parts = partition(nextProps.items, it => get(nextProps.selection, it.id, false));
        return {
            toDoDataSource: toDoDataSource.cloneWithRows(parts[1] || []),
            completedDataSource: completedDataSource.cloneWithRows(parts[0] || []),
        };
    }

    render () {
        return (
            <View style={styles.container} >
                <ListView
                    dataSource={this.state.toDoDataSource}
                    renderRow={this.renderItem}
                    style={styles.listView}
                />
                <View style={styles.containerCompleted}>
                    <ListView
                        dataSource={this.state.completedDataSource}
                        renderRow={this.renderItem}
                        style={styles.completedListView}
                    />
                </View>
                <ItemAdder/>
            </View>
        );
    }

    renderItem = (item)  => {
        return (
            <ShopListItem key={item.id} id={item.id} name={item.name} selected={get(this.props.selection, item.id, false)}/>
        );
    }
}

ShopList.propTypes = {
    items: PropTypes.array.isRequired,
    selection: PropTypes.object.isRequired,
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
        flex: 3,
        flexGrow: 3,
        backgroundColor: '#F5FCFF',
        alignSelf: 'stretch',
    },
    completedListView: {
        flex: 1,
        alignSelf: 'stretch',
    },

    containerCompleted: {
        borderTopWidth: 0.5,
        borderTopColor: "#c6c6c6",
        flex: 1,
        flexGrow: 1,
        flexShrink: 2,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        alignSelf: 'stretch',
        paddingTop: 5,
        paddingBottom: 5
    },
});
