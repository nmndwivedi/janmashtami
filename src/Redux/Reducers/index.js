import { combineReducers } from 'redux';
import cart from './cart';
import feed from './feed';
import catalog from './catalog';

const reducer = combineReducers({ cart, feed, catalog });

export default reducer;