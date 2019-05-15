import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCHING:
    	return {...state, fetching: true };
    case FETCH_SUCCESS:
    	console.log(action.payload);
    	return {...state, fetching: false, characters: [...state.characters, ...action.payload] };
    case FETCH_FAILURE:
    	return {...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
