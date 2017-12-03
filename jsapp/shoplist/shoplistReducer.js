import { TOGGLE_ITEM, ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM_NAME } from './shoplistActions';
import makeId from '../utils/makeId';
import get from 'lodash/get';
import filter from 'lodash/filter';
import find from 'lodash/find';
import omit from 'lodash/omit';

export default function shoplist (state = {}, action) {
    switch (action.type) {
    case TOGGLE_ITEM: {
        const selected = get(state, `selection[${action.itemId}]`, false);
        return Object.assign({}, state, {
            selection: Object.assign({}, state.selection, {
                [action.itemId]: !selected
            })
        });
    }
    case ADD_ITEM: {
        const items = get(state, 'items', []);
        const nextId = makeId();
        return Object.assign({}, state, {
            items: items.concat([{
                id: nextId,
                key: nextId,
                name: action.itemValue,
                order: items.length
            }])
        });
    }
    case REMOVE_ITEM: {
        const items = get(state, 'items', []);
        const selection = get(state, 'selection', {});
        return Object.assign({}, state, {
            items:  filter(items, elem => elem.id !== action.itemId),
            selection: omit(selection, action.itemId)
        });
    }
    case UPDATE_ITEM_NAME: {
        const items = get(state, 'items', []);
        const item = find(items, {id: action.itemId});
        if(item){
            const nextItems = filter(items, elem => elem.id !== action.itemId).concat(
                Object.assign({},item,{name: action.newName})
            );
            return Object.assign({}, state, {
                items: nextItems
            });
        }
        return state;
    }
    default:
        return state;
    }
}
