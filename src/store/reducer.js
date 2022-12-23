import {
    TOKEN,
    ROOM_LIST,
    CONNECTION,
    LOADING,
    MESSAGES,
    ROOM_ID,
    NEW_MESSAGE,
  } from "./actions";
  
  const initialState = () => ({
    token:'',
    currentRoom: null,
    messages: [],
    connection: null,
    roomList: [],
    isLoading: true,
  });
  
  export default (state = initialState(), action) => {
    switch (action.type) {
      case TOKEN:
        return {
          ...state,
          token: action.data,
        };
        case ROOM_LIST:
        return {
          ...state,
          roomList: action.data,
        };
      case CONNECTION:
        return {
          ...state,
          connection: action.data,
        };
      case LOADING:
        return {
          ...state,
          isLoading: action.data,
        };
      case ROOM_ID:
        return {
          ...state,
          currentRoom: action.data,
        };
      case MESSAGES:
        return {
          ...state,
          messages: action.data,
        };
      case NEW_MESSAGE:
        return {
          ...state,
          messages: [...state.messages, action.data],
        };
      default:
        return state;
    }
  };
  