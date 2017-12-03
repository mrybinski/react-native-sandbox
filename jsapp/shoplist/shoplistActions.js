export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export function toggleItem (itemId) {
    return { type: TOGGLE_ITEM, itemId };
}

export const ADD_ITEM = 'ADD_ITEM';
export function addItem(itemValue) {
    return { type: ADD_ITEM, itemValue };
}

export const REMOVE_ITEM = 'REMOVE_ITEM';
export function removeItem(itemId) {
    return { type: REMOVE_ITEM, itemId };
}

export const UPDATE_ITEM_NAME = 'UPDATE_ITEM_NAME';
export function updateItemName(itemId, newName){
    return { type: UPDATE_ITEM_NAME, itemId, newName };
}

export const REMOVE_SELECTED = 'REMOVE_SELECTED';
export function removeSelected() {
    return { type: REMOVE_SELECTED };
}