import {INCREMENT, 
        DECREMENT, 
        ADD, SUBTRACT, 
        FETCH_COUNTER_SUCCESS, 
        FETCH_TASK_SUCCESS, 
        CHANGE_TASK, 
        ADD_TASK, 
        DELETE_TASK} 
from "../store/actions";

const initialState = {
  counter: 0,
  tasks: [],
  text: ''
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
    case FETCH_TASK_SUCCESS:
      return {...state, tasks: action.tasks};
    case ADD_TASK:
      return {...state, text: '', tasks: state.tasks};
    case CHANGE_TASK:
      return {...state, text: action.value};
    case DELETE_TASK:
      return {...state, tasks: state.tasks};
    default:
      return state;
  }
};
export default reducer;