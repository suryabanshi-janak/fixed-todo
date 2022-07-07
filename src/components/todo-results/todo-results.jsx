import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

  const calculateChecked = () => {
    const completedTask = todos.filter((todo) => todo.checked).length;
    if (completedTask === 0) {
      return 'No task has been completed';
    }
    return `${completedTask} task has been completed.`;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
