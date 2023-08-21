const RemoveAllAboveTasks = (props) => {
  const RemoveAllAboveTasksByClick = () => {
    props.onRemoveAllAboveTasks();
  };

  return (
    <div className='pb-4 text-center'>
      <button
        className='px-4 py-2 rounded cursor-pointer bg-red-500 dark:bg-orange-700 text-gray-100 font-semibold'
        onClick={RemoveAllAboveTasksByClick}
      >
        Remove All Above Tasks
      </button>
    </div>
  );
};

export default RemoveAllAboveTasks;
