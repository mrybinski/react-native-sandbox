import { createStore } from 'redux';
import makeId from '../utils/makeId';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

const preloadedState ={ 
    shoplist: {
        items: [{
            id: makeId(),
            name: 'first item'
        },
        {
            id: makeId(),
            name: 'second item'
        }]
    }
};

export default function configureStore () {
    const store = createStore(
        rootReducer,
        preloadedState
    );

    return { persistor: persistStore(store), store };
}
