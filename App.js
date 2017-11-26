import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './jsapp/root/configureStore';
import ShopList from './jsapp/shoplist/shoplistContainer';

const store = configureStore();

export default class App extends Component {
    render () {
        return (
            <Provider store={store} >
                <ShopList />
            </Provider>
        );
    }
}