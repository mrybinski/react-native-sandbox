import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './jsapp/root/configureStore';
import ShopList from './jsapp/shoplist/shoplistContainer';
import { PersistGate } from 'redux-persist/es/integration/react';

const storeConfig = configureStore();

const onBeforeLift = () => {
    // take some action before the gate lifts
};

export default class App extends Component {
    render () {
        return (
            <Provider store={storeConfig.store} >
                <PersistGate 
                    loading={null}
                    onBeforeLift={onBeforeLift}
                    persistor={storeConfig.persistor}>
                    <ShopList />
                </PersistGate>
            </Provider>
        );
    }
}