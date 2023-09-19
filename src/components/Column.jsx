import './Column.css';
import Task from './Task';
import React from 'react';

function Column({ state }) {
  return (
    <div className='column'>
      <p>{state}</p>
      <Task title='Todo' />
    </div>
  );
}

export default Column;
