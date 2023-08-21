const LeftMenu = (props) => {
  const taskTypeHandler = (e) => {
    props.onChangeTaskType(e.target.value);
  };

  return (
    <div className='px-4 pt-4 pb-2 select-none'>
      <div className='flex flex-row items-center justify-between '>
        <div className='flex items-center gap-x-1'>
          <span className='flex items-center justify-center w-6 h-6 text-sm font-semibold text-black bg-yellow-300 rounded-full dark:text-gray-100 dark:bg-yellow-600'>
            {props.itemsLeft}
          </span>
          <span className='text-xs text-black dark:text-gray-100'>
            {props.itemsLeft > 1 ? ` items left` : ` item left`}
          </span>
        </div>

        <div className='flex flex-row items-center text-sm divide-x divide-sky-400 dark:divide-yellow-700'>
          <button className='relative w-16 h-8 rounded-s-xl'>
            <input
              type='radio'
              name='taskType'
              id='all'
              value='all'
              className='absolute top-0 bottom-0 left-0 right-0 opacity-0 peer rounded-s-xl'
              checked={props.taskType === 'all'}
              onChange={taskTypeHandler}
            />
            <label
              htmlFor='all'
              className='absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center text-black cursor-pointer rounded-s-xl dark:text-white bg-sky-200 dark:bg-yellow-600 peer-checked:bg-sky-400 dark:peer-checked:bg-yellow-700 peer-checked:font-semibold '
            >
              All
            </label>
          </button>
          <button className='relative w-16 h-8'>
            <input
              type='radio'
              name='taskType'
              id='active'
              value='active'
              className='absolute top-0 bottom-0 left-0 right-0 opacity-0 peer'
              checked={props.taskType === 'active'}
              onChange={taskTypeHandler}
            />
            <label
              htmlFor='active'
              className='absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center text-black cursor-pointer dark:text-white bg-sky-200 dark:bg-yellow-600 peer-checked:bg-sky-400 dark:peer-checked:bg-yellow-700 peer-checked:font-semibold '
            >
              Active
            </label>
          </button>
          <button className='relative w-20 h-8 rounded-e-xl'>
            <input
              type='radio'
              name='taskType'
              id='complete'
              value='complete'
              className='absolute top-0 bottom-0 left-0 right-0 opacity-0 peer'
              checked={props.taskType === 'complete'}
              onChange={taskTypeHandler}
            />
            <label
              htmlFor='complete'
              className='absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center text-black cursor-pointer rounded-e-xl dark:text-white bg-sky-200 dark:bg-yellow-600 peer-checked:bg-sky-400 dark:peer-checked:bg-yellow-700 peer-checked:font-semibold '
            >
              Complete
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
