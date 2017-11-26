
import { combineReducers } from 'redux';
import shoplistReducer from '../shoplist/shoplistReducer';


const reducer = combineReducers({
    shoplist: shoplistReducer
});

export default reducer;
