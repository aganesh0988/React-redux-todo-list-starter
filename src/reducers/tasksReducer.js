// TODO: Import `CREATE_TASK` and `DELETE_TASK` string literal constants
import { CREATE_TASK, DELETE_TASK } from '../actions/taskActions';

const tasksReducer = (state = {}, action) => {
  // TODO: Freeze the state
  Object.freeze(state)
  // TODO: Define switch case for routing 'CREATE_TASK' actions and 'DELETE_TASK' actions
  let nextState = { ...state }
  switch (action.type) {
    case CREATE_TASK:
      const newTask = {
        message: action.taskMessage,
        id: action.taskId
      };
      nextState[action.id] = newTask;
      return nextState;
    case DELETE_TASK:
      const stateWithDeletion = nextState[action.id];
      delete stateWithDeletion[action.taskId];
      return stateWithDeletion;
    default:
      return state;
  }

};

export default tasksReducer;
