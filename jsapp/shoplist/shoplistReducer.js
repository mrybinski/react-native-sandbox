import { TOGGLE_ITEM, ADD_ITEM, REMOVE_ITEM } from './shoplistActions';
import makeId from '../utils/makeId';
import get from 'lodash/get';
import filter from 'lodash/filter';

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
        return Object.assign({}, state, {
            items: items.concat([{
                id: makeId(),
                name: action.itemValue
            }])
        });
    }
    case REMOVE_ITEM: {
        const items = get(state, 'items', []);
        return Object.assign({}, state, {
            items:  filter(items, elem => elem.id !== action.itemId)
        });
    }
    default:
        return state;
    }
}
