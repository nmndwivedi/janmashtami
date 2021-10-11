import { combineReducers } from 'redux';
import cart from './cart';
import feed from './feed';

const reducer = combineReducers({
    cart,
    feed
});

export default reducer;