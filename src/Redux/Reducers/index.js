import { combineReducers } from 'redux';
import cart from './cart';
import feed from './feed';
import catalog from './catalog';
import progress from './progress';
import person from './person';
import purchased from './purchased';

const reducer = combineReducers({ cart, feed, catalog, progress, person, purchased });

export default reducer;