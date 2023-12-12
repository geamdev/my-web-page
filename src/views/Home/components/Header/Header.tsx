const Header: React.FC = () => {
  return (
    <section className='flex flex-col justify-center h-[calc(100vh-4rem)] dark:text-white text-[#4c4f65]'>
      <div className='flex flex-col items-start mx-auto'>
        <h1 className='text-5xl md:text-7xl font-bold'>
          Geampiere <span className='block md:inline'>Jaramillo</span>
        </h1>
        <p className='font-semibold'>
          I&#39;m a <span>Frontend Developer</span>
        </p>
        <button className='px-4 py-2 mt-4 text-white bg-[#4c4f65] rounded-md'>
          About
        </button>
      </div>
    </section>
  );
};

export default Header;
