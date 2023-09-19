import './Column.css';
import Task from './Task';
import { useMemo } from 'react';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Column({ status }) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  Column.propTypes = {
    status: PropTypes.string,
  };

  const tasks = useStore((state) => state.tasks, shallow);

  const addTask = useStore((state) => state.addTask);

  const filtered = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );

  console.log(tasks);

  return (
    <div className='column'>
      <div className='titleWrapper'>
        <p>{status}</p>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Add
        </button>
      </div>

      {filtered.map((task) => (
        <Task title={task.title} key={Math.random()} />
      ))}

      {open && (
        <div className='modal'>
          <div className='modalContent'>
            <input
              type='text'
              placeholder='Task title'
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              onClick={() => {
                addTask(text, 'PLANNED');
                setText('');
                setOpen(false);
              }}
            >
              Add task
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Column;
