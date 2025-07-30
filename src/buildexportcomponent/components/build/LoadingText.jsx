const LoadingText = ({ text }) => {
  return (
    <div>
      <div
        className="typography-body relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 animate-gradient-x"
        style={{
          backgroundSize: '300% 100%',
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default LoadingText;
