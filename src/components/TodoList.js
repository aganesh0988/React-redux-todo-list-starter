import React from 'react';
import Task from './Task';
// TODO: Import the application's Redux store instance
// TODO: Import the `deleteTask` action

class TodoList extends React.Component {
  deleteTask = (id) => {
    // TODO: Invoke `deleteTask` action creator function based on an `id` input
    // TODO: Dispatch a 'DELETE_TASK' action
  }

  componentDidMount() {
    // TODO: Use the store's `subscribe` method to force update a component whenever the state changes
    // TODO: Name the subscription as `this.unsubscribe`
  }

  componentWillUnmount() {
    // TODO: Check if the component has mounted by checking if `this.unsubscribe` is defined
    // TODO: If it is defined, invoke `this.unsubscribe` when the component unmounts
  }

  render() {
    // TODO: Access the tasks stored in the Redux store's state with the `getState` method
    // TODO: Use debugger to view state

    // TODO: If there are no tasks stored in state, have the `TodoList` component return `null`.

    return (
      <ul>
        {/* 
          TODO: Render a `Task` component for each of the tasks stored in state 
          TODO: Pass the `this.deleteTask` method, that has been wrapped with the `store.dispatch` method as a `deleteTask` prop
        */}
      </ul>
    );
  }
} 

export default TodoList;
