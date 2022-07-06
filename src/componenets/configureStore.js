import {combineReducers, createStore} from 'redux';
import reducers from './../utils/reducers';

export default function configureStore() {
    return createStore(
        combineReducers({
            ...reducers
        }),
        {}
    );
}