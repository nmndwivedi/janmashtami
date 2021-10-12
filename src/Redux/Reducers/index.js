import { combineReducers } from 'redux';
import cart from './cart';
import feed from './feed';
import catalog from './catalog';
import progress from './progress';

const reducer = combineReducers({ cart, feed, catalog, progress });

export default reducer;