import Task from './Task';

const TaskBox = (props) => {
  const onToggleComplete = (id) => {
    props.onToggleComplete(id);
  };

  const onRemoveTask = (id) => {
    props.onRemoveTask(id);
  };

  const onEditTask = (id) => {
    props.onEditTask(id);
  };

  const selectedTasksActive = props.selectedTasks.filter((st) => !st.complete);
  selectedTasksActive.sort((a, b) => a.id - b.id);
  const selectedTasksComplete = props.selectedTasks.filter((st) => st.complete);
  selectedTasksComplete.sort((a, b) => a.id - b.id);

  return (
    <div className='px-4 pb-4 select-none'>
      {props.selectedTasks.length > 0 && (
        <ul className='px-2 border border-purple-400 divide-y rounded dark:border-black divide-sky-200 dark:divide-gray-500'>
          {selectedTasksActive.map((st) => (
            <Task
              key={st.id}
              id={st.id}
              text={st.text}
              complete={st.complete}
              onToggleComplete={onToggleComplete}
              onRemoveTask={onRemoveTask}
              onEditTask={onEditTask}
            />
          ))}
          {selectedTasksComplete.map((st) => (
            <Task
              key={st.id}
              id={st.id}
              text={st.text}
              complete={st.complete}
              onToggleComplete={onToggleComplete}
              onRemoveTask={onRemoveTask}
              onEditTask={onEditTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskBox;
