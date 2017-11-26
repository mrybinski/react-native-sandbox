
import storage from 'redux-persist/es/storage';
import { persistCombineReducers } from 'redux-persist';
import shoplistReducer from '../shoplist/shoplistReducer';

const config = {
    key: 'root',
    storage,
};

const reducer = persistCombineReducers(config, {
    shoplist: shoplistReducer
});


export default reducer;
