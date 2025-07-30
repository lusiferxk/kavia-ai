import React, { useState } from 'react';

const ProjectSelectionComponent = ({ handleComplexProjectSubmit, isComplexProjectSubmitting, isLight, setIsModalOpen }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectTemplates = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Complete online store with payment integration",
      complexity: "Advanced",
      estimatedTime: "4-6 weeks"
    },
    {
      id: 2,
      name: "Social Media Dashboard",
      description: "Analytics and management platform for social media",
      complexity: "Intermediate",
      estimatedTime: "3-4 weeks"
    },
    {
      id: 3,
      name: "Task Management System",
      description: "Project and task tracking application",
      complexity: "Intermediate",
      estimatedTime: "2-3 weeks"
    },
    {
      id: 4,
      name: "Learning Management System",
      description: "Online education platform with courses and assessments",
      complexity: "Advanced",
      estimatedTime: "6-8 weeks"
    }
  ];

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleSubmit = () => {
    if (selectedProject && handleComplexProjectSubmit) {
      handleComplexProjectSubmit(selectedProject);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className={`text-2xl font-bold mb-4 ${isLight ? "text-gray-800" : "text-white"}`}>
          Choose a Project Template
        </h2>
        <p className={`${isLight ? "text-gray-600" : "text-gray-400"}`}>
          Select from our pre-built project templates to get started quickly
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {projectTemplates.map((project) => (
          <div
            key={project.id}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              selectedProject?.id === project.id
                ? `border-orange-500 ${isLight ? "bg-orange-50" : "bg-orange-900/20"}`
                : `${isLight ? "border-gray-200 hover:border-gray-300 bg-white" : "border-gray-700 hover:border-gray-600 bg-gray-800"}`
            }`}
            onClick={() => handleProjectSelect(project)}
          >
            <h3 className={`text-lg font-semibold mb-2 ${isLight ? "text-gray-800" : "text-white"}`}>
              {project.name}
            </h3>
            <p className={`text-sm mb-4 ${isLight ? "text-gray-600" : "text-gray-400"}`}>
              {project.description}
            </p>
            <div className="flex justify-between items-center">
              <span className={`text-xs px-2 py-1 rounded ${
                project.complexity === 'Advanced' 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {project.complexity}
              </span>
              <span className={`text-xs ${isLight ? "text-gray-500" : "text-gray-500"}`}>
                {project.estimatedTime}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          disabled={!selectedProject || isComplexProjectSubmitting}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
            selectedProject && !isComplexProjectSubmitting
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isComplexProjectSubmitting ? "Creating Project..." : "Create Project"}
        </button>
      </div>
    </div>
  );
};

export default ProjectSelectionComponent;
