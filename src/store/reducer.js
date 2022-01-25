import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from './Recommend/index';
import { reducer as singersReducer } from './Singers/index';
import { reducer as rankReducer } from './Rank/index';
import { reducer as albumReducer } from './Album/index';
import { reducer as singerInfoReducer } from './PersonSinger/index';

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer,
  album: albumReducer,
  singerInfo: singerInfoReducer
});
