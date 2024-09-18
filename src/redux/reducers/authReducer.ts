 interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
  }
  
  const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
  };
  

  interface Action {
    type: string;
    payload?: any;
  }

  export const authReducer = (state = initialState, action: Action): AuthState => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };