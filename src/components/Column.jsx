import './Column.css';
import Task from './Task';
import React, { useMemo } from 'react';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

function Column({ status }) {
  const tasks = useStore((state) => state.tasks, shallow);

  const filtered = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );

  console.log(tasks);

  return (
    <div className='column'>
      <p>{status}</p>
      {filtered.map((task) => (
        <Task title={task.title} key={Math.random()} />
      ))}
    </div>
  );
}

export default Column;
