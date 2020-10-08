import { combineReducers } from 'redux';

import { AppReducer } from './AppReduser';
import { ProfileReducer } from './ProfileReducer';

const rootReducer = combineReducers({
  appModule: AppReducer,
  profileModule: ProfileReducer,
});

export default rootReducer;
