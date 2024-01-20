import { combineReducers } from 'redux';

import cartSlice from './cartSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  userState: userSlice,
  cartState: cartSlice,
});

export default rootReducer;