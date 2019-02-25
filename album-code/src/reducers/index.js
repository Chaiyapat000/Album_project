import { combineReducers } from 'redux';
import { albumreducers } from './albumreducers';
import { urlreducers } from './urlreducers'
 
export default combineReducers({
  album_in_store: albumreducers,
  url_in_store : urlreducers
});