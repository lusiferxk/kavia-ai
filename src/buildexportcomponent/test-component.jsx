"use client";
import React, { useState } from 'react';
import BuildContent from './components/BuildContent';
import { UserProvider } from './contexts/UserContext';
import { TopBarProvider } from './contexts/TopBarContext';
import { AlertProvider } from './contexts/AlertContext';
import './styles/globals.css';

const TestBuildContent = () => {
  // State management for BuildContent
  const [selectedType, setSelectedType] = useState(0);
  const [selectedBuildOption, setBuildOption] = useState(0);
  const [activeFramework, setActiveFramework] = useState({ web: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [isComplexProjectSubmitting, setIsComplexProjectSubmitting] = useState(false);

  // Mock functions for project creation
  const createProject = async (blueprintData) => {
    console.log('Creating project with blueprint:', blueprintData);
    // Implement your project creation logic here
    return { success: true, projectId: 'mock-project-id' };
  };

  const handleComplexProjectSubmit = async (projectData) => {
    setIsComplexProjectSubmitting(true);
    try {
      console.log('Complex project submission:', projectData);
      // Implement your complex project logic here
    } finally {
      setIsComplexProjectSubmitting(false);
    }
  };

  return (
    <AlertProvider>
      <UserProvider>
        <TopBarProvider>
          <div className="min-h-screen bg-[#231F20]">
            <BuildContent
              loggedInState={false} // Set to true if user is logged in
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedBuildOption={selectedBuildOption}
              setBuildOption={setBuildOption}
              activeFramework={activeFramework}
              setActiveFramework={setActiveFramework}
              createProject={createProject}
              handleComplexProjectSubmit={handleComplexProjectSubmit}
              isComplexProjectSubmitting={isComplexProjectSubmitting}
              setIsModalOpen={setIsModalOpen}
              isStreaming={isStreaming}
              loadingText={loadingText}
              inputText={inputText}
              setInputText={setInputText}
            />
          </div>
        </TopBarProvider>
      </UserProvider>
    </AlertProvider>
  );
};

export default TestBuildContent;
