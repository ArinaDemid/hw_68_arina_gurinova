import {INCREMENT, DECREMENT, ADD, SUBTRACT, FETCH_COUNTER_SUCCESS, FETCH_COUNTER_REQUEST} from "../store/actions";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {...state, counter: state.counter + 1};
    case DECREMENT:
      return {...state, counter: state.counter - 1};
    case ADD:
      return {...state, counter: state.counter + 5};
    case SUBTRACT:
      return {...state, counter: state.counter - 5};
      case FETCH_COUNTER_SUCCESS:
        return {...state, counter: action.counter};
      case FETCH_COUNTER_REQUEST:
        return {...state, counter: action.counter};  
    default:
      return state;
  }
};
export default reducer;