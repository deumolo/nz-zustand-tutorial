import classNames from 'classnames';
import './Task.css';
import React from 'react';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

function Task({ title }) {
  const task = useStore(
    (state) => state.tasks.find((task) => task.title === title),
    shallow
  );

  return (
    <div className='task'>
      <div>{task.title}</div>
      <div className='bottomWrapper'>
        <div></div>
        <div className={classNames('status', task.status)}> {task.status} </div>
      </div>
    </div>
  );
}

export default Task;
