import { useEffect, useState } from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import InputTask from './component/InputTask';
import LeftMenu from './component/LeftMenu';
import TaskBox from './component/TaskBox';
import { createPortal } from 'react-dom';
import Modal from './component/Modal';
import RemoveAllAboveTasks from './component/RemoveAllAboveTasks';

function App() {
  const storedTask =
    localStorage.getItem('tasks') === null
      ? []
      : JSON.parse(localStorage.getItem('tasks'));

  const [idCounter, setIdCounter] = useState(0);
  const [tasks, updateTasks] = useState(storedTask);
  const [taskType, setTaskType] = useState('all');
  const [modal, setModal] = useState({ show: false, task: {} });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    updateTasks((prevTasks) => [
      ...prevTasks,
      { id: idCounter, complete: false, text: text },
    ]);
    setIdCounter((prevID) => prevID + 1);
  };

  const toggleCompleteHandler = (id) => {
    updateTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === id ? { ...t, complete: !t.complete } : t))
    );
  };

  const removeTaskHandler = (id) => {
    updateTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  const editTaskHandler = (id) => {
    const task = tasks.filter((t) => t.id === id)[0];
    setModal({ show: true, task: task });
  };

  const changeTaskType = (type) => {
    setTaskType(type);
  };

  const itemsLeft = tasks.filter((t) => !t.complete).length;

  let selectedTasks;
  if (taskType === 'active') {
    selectedTasks = tasks.filter((t) => !t.complete);
  } else if (taskType === 'complete') {
    selectedTasks = tasks.filter((t) => t.complete);
  } else {
    selectedTasks = tasks;
  }

  const closeModalHandler = () => {
    setModal({ show: false, task: {} });
  };

  const updateTaskHandler = (task) => {
    setModal({ show: false, task: {} });
    updateTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? task : t))
    );
  };

  const onRemoveAllAboveTasksHandler = () => {
    if (taskType === 'active') {
      updateTasks(tasks.filter((t) => t.complete));
    } else if (taskType === 'complete') {
      updateTasks(tasks.filter((t) => !t.complete));
    } else {
      updateTasks([]);
    }
  };

  return (
    <>
      {modal.show &&
        createPortal(
          <Modal
            task={modal.task}
            onUpdate={updateTaskHandler}
            onCloseModal={closeModalHandler}
          />,
          document.body
        )}
      <div className='relative min-h-screen'>
        <div className='pb-8'>
          <Header />
          <div className='sticky top-0 z-10 backdrop-blur-sm'>
            <InputTask onAddTask={addTask} />
            <LeftMenu
              itemsLeft={itemsLeft}
              taskType={taskType}
              onChangeTaskType={changeTaskType}
            />
          </div>
          <TaskBox
            selectedTasks={selectedTasks}
            onToggleComplete={toggleCompleteHandler}
            onRemoveTask={removeTaskHandler}
            onEditTask={editTaskHandler}
          />
          {selectedTasks.length > 1 && (
            <RemoveAllAboveTasks
              onRemoveAllAboveTasks={onRemoveAllAboveTasksHandler}
            />
          )}
        </div>

        <div className='absolute bottom-0 w-full h-8'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
