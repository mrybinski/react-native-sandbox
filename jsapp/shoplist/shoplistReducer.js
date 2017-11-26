import { TOGGLE_ITEM, ADD_ITEM } from './shoplistActions';
import { Map, List } from 'immutable';
import makeId from '../utils/makeId';

export default function shoplist (state = Map({}), action) {
    switch (action.type) {
    case TOGGLE_ITEM: 
        return state.update('selection', selection => {
            selection = selection || Map({});
            return selection.update(action.itemId, selected => !selected);
        });
    case ADD_ITEM: 
        return state.update('items', items => {
            items = items || List([]);
            return items.push({
                id: makeId(),
                name: action.itemValue
            });
        });
    default:
        return state;
    }
}
