import classNames from 'classnames';
import './Task.css'
import React from 'react';

const STATUS = 'PLANNED';

function Task({ title }) {
  return <div className='task'>
    <div>{title}</div>
    <div className='bottomWrapper'>
      <div></div>
      <div className={classNames('status', STATUS)}> Status </div>
    </div>
  </div>;
}

export default Task;
