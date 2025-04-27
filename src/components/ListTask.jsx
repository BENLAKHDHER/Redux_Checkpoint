import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not-done') return !task.isDone;
    return true;
  });

  return (
    <div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <p>No tasks to display</p>
      )}
    </div>
  );
};

export default ListTask;