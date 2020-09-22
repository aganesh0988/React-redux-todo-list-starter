// TODO: Define `CREATE_TASK` constant
// TODO: Define `DELETE_TASK` constant
export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// TODO: Define `createTask` action creator function
export const createTask = (taskMessage) => ({
  type: CREATE_TASK,
  taskMessage: taskMessage,
  taskId: new Date().getTime()
})

// TODO: Define `deleteTask` action creator function
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId
})
