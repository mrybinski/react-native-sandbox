import React, { Component } from 'react';
import ShopListItem from './shoplistItemContainer';
import PropTypes from 'prop-types';

import { StyleSheet, SectionList, Text } from 'react-native';
import partition from 'lodash/partition';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import InPlaceItemAdder from './inPlaceItemAdder';
import CompletedSectionHeader from './completedSectionHeader';

export default class ShopList extends Component {
    constructor (props) {
        super(props);

        this.state = Object.assign({}, {collapsed: false}, this.calculateNextState(this.props));
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.calculateNextState(nextProps));
    }

    calculateNextState(nextProps){
        const parts = partition(nextProps.items, it => get(nextProps, `selection[${it.id}]`, false));
        const toDos = sortBy(parts[1] || [], 'order');
        const completed = sortBy(parts[0] || [], 'order');
        
        toDos.push({id: 'adder', key: 'adder'});
        return {
            toDos,
            completed
        };
    }

    collapseToggle = () => {
        this.setState({collapsed: !this.state.collapsed});
    }

    render () {
        const sections = [
            {data: this.state.toDos, title: 'ToDo', key: 'todos', id: 'todos'},
        ];

        if(this.state.completed.length > 0){

            const completedData = this.state.collapsed ? [] : this.state.completed;
            sections.push({data: completedData, title: 'Completed', key: 'completed', id: 'completed'});
        }

        return (
            <SectionList
                renderItem={this.renderItem}
                renderSectionHeader={this.renderSection}
                sections={sections}
                style={styles.list}
            />
        );
    }

    renderSection = (sectionData)  => {
        const section = sectionData.section;
        if(section.id === 'todos'){
            return null;
        }
        
        return (
            <CompletedSectionHeader remove={this.props.removeSelected} collapsed={this.state.collapsed} itemsCount={this.state.completed.length} onToggle={this.collapseToggle}/>
        );
    }

    renderItem = (itemData)  => {
        const item = itemData.item;
        if(item.id === 'adder'){
            return <InPlaceItemAdder onAdd={this.props.addItem} />;
        }


        return (
            <ShopListItem id={item.id} name={item.name} selected={get(this.props.selection, item.id, false)} addNew={this.props.addItem}/>
        );
    }
}

ShopList.propTypes = {
    items: PropTypes.array.isRequired,
    selection: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
    removeSelected: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
    list: {
        marginHorizontal: 20,
        marginVertical: 10
    }
});
