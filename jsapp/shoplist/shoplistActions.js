export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export function toggleItem (itemId) {
    return { type: TOGGLE_ITEM, itemId };
}

export const ADD_ITEM = 'ADD_ITEM';
export function addItem(itemValue) {
    return { type: ADD_ITEM, itemValue };
}
