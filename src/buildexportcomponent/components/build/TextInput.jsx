import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import LoadingText from './LoadingText';

// A helper function to safely extract a string from an object or complex value
const extractSafeString = (value) => {
  // Handle null/undefined
  if (value === null || value === undefined) return '';

  // Handle primitive types
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);

  // Handle specific React/DOM event types - return empty string instead of object properties
  if (value && typeof value === 'object') {
    // Check for React synthetic events or DOM events
    if (
      value.nativeEvent ||
      value.type === 'click' ||
      value.target ||
      value.currentTarget ||
      value.timeStamp ||
      value.preventDefault ||
      value.stopPropagation
    ) {
      return '';
    }

    // If it has a name, label, or text property, use that
    if (value.text) return value.text;
    if (value.label) return value.label;
    if (value.name) return value.name;
    if (value.title) return value.title;
    if (value.description) return value.description;
    if (value.content) return value.content;

    // If it's an array, join elements
    if (Array.isArray(value)) {
      return value.map(item =>
        typeof item === 'object' ? extractSafeString(item) : String(item)
      ).join(', ');
    }

    // For React components or DOM elements, return empty string to avoid UI glitches
    if (value.$$typeof || value.nodeType) return '';

    // For other objects, try to get meaningful properties
    const props = Object.keys(value).filter(key =>
      !key.startsWith('_') &&
      typeof value[key] !== 'function' &&
      typeof value[key] !== 'object'
    );

    if (props.length > 0) {
      return props.map(key => value[key]).join(' ');
    }
  }

  // Default to empty string instead of placeholder
  return '';
};

const TextInput = ({ disabled, loadingText, inputText, setInputText, handleSubmit, isLight }) => {
  const isInputEmpty = () => {
    return !inputText || (typeof inputText === 'string' && inputText.trim() === '');
  };

  const safeInputValue = () => {
    return extractSafeString(inputText);
  };

  const handleInputChange = (e) => {
    if (e && e.target && typeof e.target.value === 'string') {
      setInputText(e.target.value);
    }
  };

  const handleSafeSubmit = () => {
    if (typeof handleSubmit === 'function') {
      handleSubmit(inputText);

      console.log(inputText);
      
    }
  };

  return (
    <div className={`relative w-full mt-8 ${disabled && "animate-pulse"}`}>
      <div className="absolute inset-0 -left-px -right-px -top-px -bottom-px rounded-xl overflow-hidden">
        <div className={`absolute inset-0 conic-gradient-wrapper ${disabled ? "animate-gradient-rotation-disabled" : "animate-gradient-rotation"}`}>
          <div className={`absolute inset-[-200%] ${isLight ? "bg-conic-gradient-light" : "bg-conic-gradient"}`}></div>
        </div>
      </div>

      <div className={`relative p-4 pb-2 flex flex-col items-center w-full ${isLight ? "bg-white" : "bg-[#332F30]"} rounded-xl border-none`}>
        <div className="w-full">
          <textarea
            type="text"
            rows={4}
            disabled={disabled}
            value={safeInputValue()}
            onChange={handleInputChange}
            className={`${isLight ? "bg-white text-gray-800" : "bg-transparent text-gray-100"} w-full disabled:opacity-75 p-0 border-none outline-none shadow-none ring-0 focus:ring-0 focus:outline-none border-none resize-none`}
            placeholder={"How can KAVIA help you today?"}
          />
        </div>

        <div className='w-full flex justify-end items-center mt-2'>
        {/* {disabled ? <LoadingText text={loadingText} /> : (<button className={`flex items-center ${isLight ? "bg-gray-50 hover:bg-gray-100" : "bg-white/10 hover:bg-white/20"} py-1 px-2 border border-none rounded-xl backdrop-blur-sm transition duration-300`}>
            <Image
              src={figmaLogo}
              alt="Figma Logo"
              width={20}
              height={20}
            />
            <span className={`ml-2 typography-body-sm ${isLight ? "text-gray-800" : "text-white"}`}>Import Figma</span>
          </button>)} */}
          <button
            onClick={handleSafeSubmit}
            disabled={disabled || isInputEmpty()}
            className={`${(disabled || isInputEmpty()) && !disabled && `cursor-not-allowed ${isLight ? "bg-gray-200" : "bg-white/10"}`} p-2 ${!disabled && !isInputEmpty() && "bg-orange-500 hover:bg-orange-600"} rounded-full text-white backdrop-blur-sm transition duration-300`}
            style={disabled ? { backgroundColor: '#F26A1B' } : {}}
          >
            {disabled ? (
              <div className="relative w-[18px] h-[18px]">
                <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
                <div className="absolute inset-0 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <ArrowUp size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextInput;