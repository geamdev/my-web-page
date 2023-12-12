const Info: React.FC = () => {
  return (
    <section className="flex flex-col justify-center h-[calc(100vh-4rem)] dark:text-white text-[#4c4f65]">
      <div className="flex flex-col items-start mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold">
          Geampiere <span className="block md:inline">Jaramillo</span>
        </h1>
        <p className="font-semibold">
          I&#39;m a <span>Frontend Developer</span>
        </p>
      </div>
    </section>
  );
};

export default Info;
