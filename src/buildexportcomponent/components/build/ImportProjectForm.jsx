import React, { useState, useRef } from 'react';
import { FileUp } from 'lucide-react';

const ImportProjectForm = ({ isLight, handleProjectSubmit }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectPurpose: 'To Understand the Code Base',
    files: []
  });

  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    let fieldName = name;

    if (fieldName == "projectTitle") {
      fieldName = "projectName";
    }

    if (type === 'file' && files) {
      setFormData(prevState => ({
        ...prevState,
        files: Array.from(files)
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [fieldName]: value
      }));
    }
  };

  const handleFileUpload = () => {
    
  };

  const handleImportProject = () => {
    // For now, just call the submit handler with the form data
    if (handleProjectSubmit) {
      const importData = {
        ...formData,
        importType: 'assets'
      };
      handleProjectSubmit(importData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requirement = `${formData.projectPurpose} for project: ${formData.projectName}`;
    if (handleProjectSubmit) {
      handleProjectSubmit({ requirement, ...formData });
    }
  };

  return (
    <div className={`flex flex-col bg-none ${isLight ? "text-gray-800" : "text-gray-200"} mt-8`}>
      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        <div className="flex-1">
          {/* Project Name Field */}
          <div className="mb-6">
            <label className={`block mb-2 typography-body-sm font-weight-light ${isLight ? "text-gray-700" : "text-gray-300"}`}>
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="e.g. Movie App"
              className={`w-full p-3 ${isLight ? "bg-white border-gray-200 text-gray-800 placeholder-gray-400" : "bg-white/5 border-zinc-700 text-gray-300 placeholder-gray-500"} border rounded typography-body-sm focus:outline-none focus:ring-1 focus:ring-orange-500`}
              required
            />
          </div>

          {/* Project Purpose Selection */}
          <div className="mb-6">
            <label className={`block mb-2 typography-body-sm font-weight-light ${isLight ? "text-gray-700" : "text-gray-300"}`}>
              Project Purpose
            </label>
            <div className="flex flex-wrap gap-1">
              <label className={`flex items-center justify-center px-4 py-1 rounded-full border transition-colors cursor-pointer ${formData.projectPurpose === 'To Understand the Code Base'
                ? 'bg-orange-500 bg-opacity-20 border-orange-500 text-orange-500'
                : `${isLight ? "border-gray-200 text-gray-700 hover:bg-gray-50" : "border-zinc-700 text-gray-300 hover:bg-white/5"}`
                }`}>
                <input
                  type="radio"
                  name="projectPurpose"
                  value="To Understand the Code Base"
                  checked={formData.projectPurpose === 'To Understand the Code Base'}
                  onChange={handleChange}
                  className="sr-only"
                />
                To Understand the Code Base
              </label>

              <label className={`flex items-center justify-center px-4 py-1 rounded-full border transition-colors cursor-pointer ${formData.projectPurpose === 'To Modify the existing Code'
                ? 'bg-orange-500 bg-opacity-20 border-orange-500 text-orange-500'
                : `${isLight ? "border-gray-200 text-gray-700 hover:bg-gray-50" : "border-zinc-700 text-gray-300 hover:bg-white/5"}`
                }`}>
                <input
                  type="radio"
                  name="projectPurpose"
                  value="To Modify the existing Code"
                  checked={formData.projectPurpose === 'To Modify the existing Code'}
                  onChange={handleChange}
                  className="sr-only"
                />
                To Modify the existing Code
              </label>
            </div>
          </div>
        </div>

        {/* Import Buttons at Bottom */}
        <div className="grid grid-cols-1 gap-3 mt-4 absolute bottom-4 left-4 right-4">
          <button
            type="button"
            onClick={handleImportProject}
            className={`w-full flex items-center justify-center py-3 px-4 border ${isLight ? "border-gray-200 text-gray-700 hover:bg-gray-50" : "border-zinc-700 text-white hover:bg-white/5"} rounded typography-body-sm font-weight-medium transition-colors`}
          >
            <FileUp className={`w-4 h-4 mr-2 ${isLight ? "text-gray-600" : "text-gray-400"}`} />
            Import Assets
          </button>
        </div>

      </form>
    </div>
  );
};

export default ImportProjectForm;
