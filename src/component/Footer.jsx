const Footer = () => {
  return (
    <footer className='px-4 select-none'>
      <div className='flex flex-row items-center justify-center gap-x-10'>
        <div className='text-xl text-black'>
          <a href='https://github.com/swkarimi'>
            <ion-icon name='logo-github'></ion-icon>
          </a>
        </div>
        <div className='text-xl text-sky-600'>
          <a href='https://www.linkedin.com/in/swkarimi/'>
            <ion-icon name='logo-linkedin'></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
