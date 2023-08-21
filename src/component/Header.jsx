import { useEffect, useState } from 'react';

const Header = () => {
  const storedDarkTheme =
    localStorage.getItem('darkTheme') === null
      ? false
      : JSON.parse(localStorage.getItem('darkTheme'));

  const [darkTheme, setDarkTheme] = useState(storedDarkTheme);

  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('darkTheme', JSON.stringify(true));
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('darkTheme', JSON.stringify(false));
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  const themeToggle = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <>
      <header className='px-4 pt-10 pb-12 select-none'>
        <div className='flex flex-row items-center justify-between '>
          <h1 className='text-3xl font-bold text-sky-400 dark:text-yellow-500'>
            <a href='#'>Todo List</a>
          </h1>
          <button
            className='flex items-center justify-center w-6 h-6 text-gray-200 bg-gray-800 rounded-full cursor-pointer dark:bg-sky-200 dark:text-yellow-400'
            onClick={themeToggle}
          >
            {darkTheme ? (
              <ion-icon name='sunny'></ion-icon>
            ) : (
              <ion-icon name='moon'></ion-icon>
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
