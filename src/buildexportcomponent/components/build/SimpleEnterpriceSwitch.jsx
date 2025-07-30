const appTypeOptions = [
  { label: 'Apps' },
  { label: 'Projects' }
];

const AppTypeSwitch = ({ selectedType, setSelectedType, isStreaming, isLight }) => {
  return (
    <div className='w-full flex justify-center'>
      <div className="w-48 border border-white/10 backdrop-blur-sm rounded-[12px] p-1 flex items-center justify-center overflow-hidden bg-black/20">
        {appTypeOptions.map((option, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded-[8px] w-full disabled:opacity-75 disabled:cursor-not-allowed text-sm font-medium transition-all duration-200 ${
              selectedType === index
                ? "bg-[#F26A1B] text-white border-none"
                : "bg-transparent text-white/70 hover:text-white border-none"
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
