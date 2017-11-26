import { createStore } from 'redux';
import makeId from '../utils/makeId';
import rootReducer from './reducers';

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
    return store;
}
