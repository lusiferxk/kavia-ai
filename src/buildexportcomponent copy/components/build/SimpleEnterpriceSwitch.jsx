const appTypeOptions = [
  { label: 'Apps' },
  { label: 'Projects' }
];

const AppTypeSwitch = ({ selectedType, setSelectedType, isStreaming, isLight }) => {
  return (
    <div className='w-full flex justify-center'>
      <div className={`w-48 border-2 ${isLight ? "border-gray-200" : "border-white/10"} backdrop-blur-sm rounded-xl p-1 flex items-center justify-center overflow-hidden`}>
        {appTypeOptions.map((option, index) => (
          <button
            key={index}
            className={`py-1 border rounded-lg w-full disabled:opacity-75 disabled:cursor-not-allowed typography-body-sm font-weight-medium transition-all duration-200 ${selectedType === index
              ? `${isLight ? "border-primary-400 bg-primary-500" : "border-primary-600 bg-primary-700"} text-white hover:text-white`
              : `${isLight ? "border-transparent text-gray-800 hover:text-gray-700" : "border-transparent text-white hover:text-white/75"}`
            }`}
            onClick={() => setSelectedType(index)}
            disabled={isStreaming}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AppTypeSwitch;
