import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/features/taskSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description }));
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleEdit} className="edit">
            Save
          </button>
        </>
      ) : (
        <>
          <span className={task.isDone ? 'line-through' : ''}>{task.description}</span>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleToggle} className="toggle">
              {task.isDone ? 'Undo' : 'Done'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;