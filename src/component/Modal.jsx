import { useState } from 'react';

const Modal = (props) => {
  const [editTask, updateEditTask] = useState(props.task.text);
  const ChangeTaskHandler = (e) => {
    updateEditTask(e.target.value);
  };

  const onCloseModal = (e) => {
    e.preventDefault();
    props.onCloseModal();
  };

  const onUpdate = (e) => {
    e.preventDefault();
    if (editTask.trim()) {
      props.onUpdate({ ...props.task, text: editTask });
    }
  };

  return (
    <>
      <div className='overlay fixed top-0 bottom-0 left-0 right-0 bg-black/50 dark:bg-white/50 z-30'>
        <div className='h-screen flex justify-center items-center '>
          <div className='bg-gray-100 dark:bg-gray-700 w-3/4 rounded-lg p-8 max-w-xl mx-auto '>
            <form className='flex flex-col gap-y-8'>
              <label
                htmlFor='edit-task'
                className='block border-b text-gray-900 dark:text-gray-100 font-semibold py-2'
              >
                Edit Task
              </label>
              <input
                type='text'
                name=''
                id='edit-task'
                className='bg-white w-full h-10 outline-none p-4 rounded text-base text-black border border-purple-400 dark:border-yellow-700 dark:bg-gray-900 dark:text-gray-100'
                value={editTask}
                onChange={ChangeTaskHandler}
              />
              <div className='flex flex-row gap-x-8 h-10'>
                <button
                  type='button'
                  className='bg-red-500 dark:bg-orange-700 text-gray-100 font-semibold w-1/2 rounded cursor-pointer'
                  onClick={onCloseModal}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='bg-green-500 dark:bg-green-700 text-gray-100 font-semibold w-1/2 rounded cursor-pointer'
                  onClick={onUpdate}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
