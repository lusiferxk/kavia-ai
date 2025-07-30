import { useState, useRef } from 'react';
import { Upload, Info } from 'lucide-react';

const AdvancedApplicationForm = ({ handleProjectSubmit, submitting, isLight }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectGoal: '',
    files: []
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const newFiles = Array.from(files);
      setFormData(prevState => {
        // Get existing file names for comparison
        const existingFileNames = prevState.files.map(file => file.name);
        
        // Filter out duplicate files (same name and size)
        const uniqueNewFiles = newFiles.filter(newFile => {
          const isDuplicate = prevState.files.some(existingFile => 
            existingFile.name === newFile.name && existingFile.size === newFile.size
          );
          return !isDuplicate;
        });
        
        return {
          ...prevState,
          files: [...prevState.files, ...uniqueNewFiles]
        };
      });
      
      // Clear the file input so the same file can be selected again if needed
      e.target.value = '';
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleUploadClick = () => {
    if (submitting) return;
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.projectName.trim()) {
      alert('Please enter a project name');
      return;
    }
    
    // Add validation for project goal
    if (!formData.projectGoal.trim()) {
      alert('Please enter a project goal');
      return;
    }
    
    console.log("Submitting project data:", formData);
    
    handleProjectSubmit(formData);
  };

  // Function to remove a specific file
  const removeFile = (indexToRemove) => {
    setFormData(prevState => ({
      ...prevState,
      files: prevState.files.filter((_, index) => index !== indexToRemove)
    }));
  };

  // Function to format file names display
  const formatFileNames = () => {
    if (formData.files.length === 0) {
      return "Upload projects Assets";
    }
    
    if (formData.files.length === 1) {
      return formData.files[0].name;
    }
    
    // For multiple files, show first file name and count
    if (formData.files.length <= 3) {
      return formData.files.map(file => file.name).join(', ');
    } else {
      return `${formData.files[0].name} and ${formData.files.length - 1} more files`;
    }
  };

  return (
    <div className={`flex flex-col bg-none ${isLight ? "text-gray-800" : "text-gray-200"} mt-8`}>
      <div onSubmit={handleSubmit} className="flex flex-col flex-1">
        <div className="h-full">
          <div className={`mb-4 ${submitting ? 'opacity-75 cursor-not-allowed' : ''}`}>
            <label className="block mb-2 text-gray-200 text-sm font-medium">
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="e.g. Movie App"
              className="w-full h-[38px] px-3 bg-white/5 border border-white/20 text-white placeholder:text-white/25 text-sm rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
              disabled={submitting}
              required
            />
          </div>

          <div className={`mb-4 ${submitting ? 'opacity-75 cursor-not-allowed' : ''}`}>
            <label className="block mb-2 text-gray-200 text-sm font-medium">
              Project Goal <span className="text-red-500">*</span>
            </label>
            <textarea
              name="projectGoal"
              value={formData.projectGoal}
              onChange={handleChange}
              placeholder="Write you project goal here...."
              rows={2}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm rounded resize-none focus:outline-none focus:ring-1 focus:ring-orange-500"
              disabled={submitting}
              required
            />
          </div>

          <div className={`mb-4 ${submitting ? 'opacity-75 cursor-not-allowed' : ''}`}>
            <p className="block mb-2 text-gray-200 text-sm font-medium">Document Upload</p>
            <div
              className="min-h-10 px-3 py-2 bg-white/5 border border-white/10 rounded flex items-center justify-center gap-[5px] cursor-pointer hover:bg-white/10 transition-colors"
              onClick={handleUploadClick}
            >
              <Upload className="w-5 h-5 text-white/50" />
              <p className="text-white/70 text-[13px] font-normal">
                {formData.files.length > 0
                  ? `${formData.files.length} file(s) selected`
                  : "Upload projects Assets"}
              </p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleChange}
                className="hidden"
                disabled={submitting}
                multiple
              />
            </div>
            
            {/* Show detailed file list below the upload area */}
            {formData.files.length > 0 && (
              <div className="mt-2 space-y-1">
                {formData.files.map((file, index) => (
                  <div key={index} className="text-white/60 text-xs px-2 py-1 bg-white/5 rounded flex justify-between items-center">
                    <span>
                      {file.name} ({(file.size / 1024).toFixed(1)} KB)
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-400 hover:text-red-300 ml-2 text-sm font-bold"
                      disabled={submitting}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info sections */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="px-3 py-1.5 bg-white/5 rounded-md backdrop-blur-[17px] flex justify-between items-center">
              <span className="text-gray-300 text-[13px] font-medium">To Define Project Core Details</span>
              <Info className="w-4 h-4 text-white/50" />
            </div>
            <div className="px-3 py-1.5 bg-white/5 rounded-md backdrop-blur-[17px] flex justify-between items-center">
              <span className="text-gray-300 text-[13px] font-medium">To Plan Requirements And Goals</span>
              <Info className="w-4 h-4 text-white/50" />
            </div>
            <div className="px-3 py-1.5 bg-white/5 rounded-md backdrop-blur-[17px] flex justify-between items-center">
              <span className="text-gray-300 text-[13px] font-medium">To Import Design and Convert to Code</span>
              <Info className="w-4 h-4 text-white/50" />
            </div>
            <div className="px-3 py-1.5 bg-white/5 rounded-md backdrop-blur-[17px] flex justify-between items-center">
              <span className="text-gray-300 text-[13px] font-medium">To Design Technical Project Structure</span>
              <Info className="w-4 h-4 text-white/50" />
            </div>
            <div className="px-3 py-1.5 bg-white/5 rounded-md backdrop-blur-[17px] flex justify-between items-center">
              <span className="text-gray-300 text-[13px] font-medium">To Implement the designed Project</span>
              <Info className="w-4 h-4 text-white/50" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting || !formData.projectName.trim() || !formData.projectGoal.trim()}
          onClick={handleSubmit}
          className={`mt-4 absolute bottom-4 left-4 right-4 bg-[#c84700] hover:bg-[#b63f00] text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${submitting ? 'animate-pulse' : ''}`}
        >
          {submitting ? "Building project..." : "Continue to Project Setup"}
        </button>
      </div>
    </div>
  );
};

export default AdvancedApplicationForm;
