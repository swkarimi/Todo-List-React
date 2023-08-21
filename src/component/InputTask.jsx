import { useState } from 'react';

const InputTask = (props) => {
  const [newTask, updateNewTask] = useState('');
  const inputTask = (e) => {
    updateNewTask(e.target.value);
  };

  const submitTask = (e) => {
    e.preventDefault();
    props.onAddTask(newTask.trim());
    updateNewTask('');
  };

  return (
    <div className='px-4 py-4'>
      <div className='flex flex-col gap-y-2'>
        <form onSubmit={submitTask}>
          <input
            id='input-task'
            type='text'
            className='w-full h-10 p-4 mb-2 text-black border border-purple-400 rounded outline-none dark:border-yellow-700 dark:bg-gray-900 dark:text-gray-100'
            placeholder='Enter Your Task'
            value={newTask}
            onChange={inputTask}
          />
          <button
            className={`w-full h-10 text-gray-100 rounded select-none ${
              newTask.trim().length === 0 ? 'inactive-btn' : 'active-btn'
            }`}
            disabled={newTask.trim().length === 0}
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputTask;
