import { createStore } from 'redux';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

export default function configureStore () {
    const store = createStore(
        rootReducer
    );

    return { persistor: persistStore(store), store };
}
