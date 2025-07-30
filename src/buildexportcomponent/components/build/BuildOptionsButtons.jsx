import { PLATFORMS } from '../../constants/platforms';

// Map PLATFORMS to the format expected by the component
const buildOptions = PLATFORMS.map(platform => ({
  id: platform.key === 'web' ? 'web' :
      platform.key === 'mobile' ? 'mobile' :
      platform.key === 'backend' ? 'backend' :
      platform.key === 'fullstack' ? 'fullstack' :
      platform.key === 'generic' ? 'generic' : platform.key,
  label: platform.label,
  isDefault: platform.key === 'web',
  icon: platform.icon
}));

const BuildOptionsButtons = ({ disabled, buildOption, setBuildOption, isLight }) => {
  // Convert to single selection - use first element if array, otherwise use as number
  const selectedOption = Array.isArray(buildOption) ? buildOption[0] || 0 : buildOption || 0;
  
  const handleOptionClick = (index) => {
    if (disabled) return;
    
    // Single selection - just set the clicked option
    setBuildOption(index);
  };

  const isSelected = (index) => selectedOption === index;

  return (
    <div className="w-full mt-8 flex gap-2 justify-center items-center">
      {buildOptions.map((option, index) => (
        <div
          key={option.id}
          className={`${disabled ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}
          flex-1 relative transition-all duration-200
          ${isSelected(index)
              ? `border border-[#F26A1B] bg-gradient-to-r from-[#F26A1B]/15 via-[#F26A1B]/8 to-[#F26A1B]/5 backdrop-blur-[17px] scale-[1.02]`
              : `border ${isLight 
                  ? "hover:border-orange-600 border-gray-200 hover:bg-gradient-to-r hover:from-amber-100/60 hover:from-10% hover:via-amber-100/40 hover:via-30% hover:to-amber-100/40 hover:to-90%" 
                  : "hover:border-orange-700 border-transparent hover:bg-gradient-to-r hover:from-amber-900/40 hover:from-10% hover:via-amber-700/10 hover:via-30% hover:to-amber-700/10 hover:to-90%"
                }`
            }`}
          style={{ borderRadius: '0.35rem' }}
          onClick={() => handleOptionClick(index)}
        >
          <div className={`${isSelected(index)
              ? `${isLight ? "bg-white/70" : "bg-white/10"} backdrop-blur-sm py-1.5 px-2 w-full flex flex-row justify-center items-center transition duration-300`
              : `${isLight ? "bg-white/70" : "bg-white/10"} backdrop-blur-sm py-1.5 px-2 w-full flex flex-row justify-center items-center transition duration-300`
            }`}
            style={{ borderRadius: '0.35rem' }}>
            <span className="mr-1">
              {option.icon}
            </span>
            <p className={`${isSelected(index) 
                ? (isLight ? "text-black typography-body-sm font-weight-normal leading-[21px]" : "text-white typography-body-sm font-weight-normal leading-[21px]") 
                : `text-md whitespace-nowrap ${isSelected(index) 
                    ? (isLight ? "text-gray-800" : "text-gray-200") 
                    : (isLight ? "text-gray-600" : "text-gray-400")
                  }`
              }`}>
              {option.label}
            </p>
            {/* Single selection indicator */}
            {isSelected(index) && (
              <div className="ml-1 w-2 h-2 bg-[#F26A1B] rounded-full flex-shrink-0"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { buildOptions };
export default BuildOptionsButtons;
