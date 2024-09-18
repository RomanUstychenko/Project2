export interface UserState {
    users: string[];
  }
  
  const initialState: UserState = {
    users: [],
  };
  
  interface Action {
    type: string;
    payload?: any;
  }
  
  // Зміна типу параметра `state` з `undefined` на `UserState`
  export const userReducer = (state: UserState = initialState, action: Action): UserState => {
    switch (action.type) {
      case 'SET_USERS':
        return {
          ...state,
          users: action.payload,
        };
      default:
        return state;
    }
  };