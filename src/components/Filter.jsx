import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/features/taskSlice';

const Filter = () => {
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <button
        onClick={() => dispatch(setFilter('all'))}
        className={filter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter('done'))}
        className={filter === 'done' ? 'active' : ''}
      >
        Done
      </button>
      <button
        onClick={() => dispatch(setFilter('not-done'))}
        className={filter === 'not-done' ? 'active' : ''}
      >
        Not Done
      </button>
    </div>
  );
};

export default Filter;