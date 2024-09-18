import { combineReducers } from 'redux';
import { authReducer,  } from './authReducer';
// import { userReducer, UserState } from './userReducer';

// Створення rootReducer, що об'єднує всі редюсери
export interface RootState {
    // auth: AuthState;
    // users: UserState;
  }
  
  const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    // users: userReducer,
  });
  
  export default rootReducer;