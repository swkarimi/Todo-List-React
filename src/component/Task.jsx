const Task = (props) => {
  const toggleComplete = () => {
    props.onToggleComplete(props.id);
  };

  const removeTask = () => {
    props.onRemoveTask(props.id);
  };

  const editTask = () => {
    props.onEditTask(props.id);
  };
  return (
    <li className='flex flex-row items-center justify-between py-2 select-none '>
      <p
        className={`p-1 text-black cursor-pointer dark:text-gray-100 capitalize ${
          props.complete ? 'complete' : ''
        }`}
        onClick={toggleComplete}
      >
        {props.text}
      </p>
      <div className='flex flex-row p-1 gap-x-2'>
        <div
          className='p-1 cursor-pointer text-sky-600 dark:text-sky-200'
          onClick={editTask}
        >
          <ion-icon name='create-outline'></ion-icon>
        </div>
        <div
          className='p-1 text-red-600 cursor-pointer dark:text-red-200'
          onClick={removeTask}
        >
          <ion-icon name='trash-outline'></ion-icon>
        </div>
      </div>
    </li>
  );
};

export default Task;
