"use client";

import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import useLocalStorage from "../hooks/useLocalStorage";
import Cookies from 'js-cookie';
import kaviaLogo from "../assets/logo/kavia_logo.svg";
import NextJSImage from "../assets/images/nextjs.svg";
import ReactJSImage from "../assets/images/react.svg";
import VueImage from "../assets/images/vue.svg";
import AngularImage from "../assets/images/angular_logo.svg"
import NuxtImage from "../assets/images/nuxt_logo.svg"
import RemixImage from "../assets/images/remix_logo.svg"
import RemotionImage from "../assets/images/remotion_logo.png"
import SlidevImage from "../assets/images/slidev_logo.svg"
import SvelteImage from "../assets/images/svelte_logo.svg"
// import TypescriptImage from "../assets/images/ts_logo.svg"
import ViteImage from "../assets/images/vite_logo.svg"
import QwikImage from "../assets/images/qwik_logo.svg"
import AstroImage from "../assets/images/astro_logo.svg"
import AndroidImage from "../assets/images/android_logo.svg"
import KotlinImage from "../assets/images/kotlin_logo.svg"

import FlutterImage from "../assets/images/flutter_logo.svg"
import FlaskImage from "../assets/images/flask_logo.svg"
import FastAPIImage from "../assets/images/fastapi.svg"
import DjangoImage from "../assets/images/django_logo.svg"
import ExpressImage from "../assets/images/expressjs_logo.svg"
import AppTypeSwitch from './build/SimpleEnterpriceSwitch';
import TextInput from './build/TextInput';
import BuildOptionsButtons from './build/BuildOptionsButtons';
import ProjectSelectionComponent from './build/ProjectSelectionComponent';
import StackOptions from './build/StackOptions';
import ProjectCreationModal from './build/ProjectCreationFlow';

import { fetchProjectBlueprint } from '../services/projectService';
import { useRouter } from 'next/navigation';
import { AlertContext } from '../contexts/AlertContext';
import { getOrganizationId } from '../utils/navigationHelpers';

export const frameworks = [
  { key: "react", label: 'React JS', icon: ReactJSImage, type: 'web', isDefault: true },
  { key: "angular", label: 'Angular', icon: AngularImage, type: 'web' },
  { key: "astro", label: 'Astro', icon: AstroImage, type: 'web' },
  { key: "nextjs", label: 'Next JS', icon: NextJSImage, type: 'web' },
  { key: "qwik", label: 'Qwik', icon: QwikImage, type: 'web' },
  { key: "nuxt", label: 'Nuxt', icon: NuxtImage, type: 'web' },
  { key: "remix", label: 'Remix', icon: RemixImage, type: 'web' },
  { key: "remotion", label: 'Remotion', icon: RemotionImage, type: 'web' },
  { key: "slidev", label: 'Slidev', icon: SlidevImage, type: 'web' },
  { key: "svelte", label: 'Svelte', icon: SvelteImage, type: 'web' },
  { key: "vite", label: 'Vite', icon: ViteImage, type: 'web' },
  { key: "vue", label: 'Vue', icon: VueImage, type: 'web' },
  { key: "flutter", label: 'Flutter', icon: FlutterImage, type: 'mobile', isDefault: true },
  { key: "android", label: 'Android', icon: AndroidImage, type: ['mobile', 'native-app']},
  { key: "kotlin", label: 'Kotlin', icon: KotlinImage, type: 'mobile' },
  { key: "flask", label: 'Flask', icon: FlaskImage, type: 'backend' },
  { key: "fastapi", label: 'FastAPI', icon: FastAPIImage, type: 'backend', isDefault: true },
  { key: "django", label: 'Django', icon: DjangoImage, type: 'backend' },
  { key: "express", label: 'Express.js', icon: ExpressImage, type: 'backend' },
];

// Build options definition (should match your BuildOptionsButtons component)
const buildOptions = [
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' }, 
  { id: 'backend', label: 'Backend' },
  { id: 'fullstack', label: 'Full Stack' }
];

const appTypeOptions = [
  { label: 'Apps' },
  { label: 'Projects' }
];

const getReactDefaultIndex = () => {
  return frameworks.findIndex(framework => framework.key === 'react');
};

const BuildContent = ({
  loggedInState,
  selectedType,
  setSelectedType,
  selectedBuildOption,
  setBuildOption,
  activeFramework,
  setActiveFramework,
  createProject: parentCreateProject,
  handleComplexProjectSubmit,
  isComplexProjectSubmitting,
  setIsModalOpen,
  isStreaming,
  loadingText,
  inputText,
  setInputText,
}) => {
  const [prompt, setPrompt] = useLocalStorage("prompt", "");
  const [isProjectCreationModalOpen, setIsProjectCreationModalOpen] = useState(false);

  const [blueprintData, setBlueprintData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isImplementing, setIsImplementing] = useState(false);
  const router = useRouter();
  const idToken = Cookies.get('idToken');
  const userId = Cookies.get('userId');
  const {showAlert} = useContext(AlertContext)
  const reactDefaultIndex = getReactDefaultIndex();

  // Remove automatic localStorage persistence to avoid separate storage
  // We'll only store data in sessionStorage when form is submitted
  const [persistedInputText, setPersistedInputText] = useState("");
  const [persistedFramework, setPersistedFramework] = useState({ web: reactDefaultIndex });
  const [persistedBuildOption, setPersistedBuildOption] = useState(0);
  const [persistedAppType, setPersistedAppType] = useState(0);

  // Determine if light theme should be used
  const isLight = false; // Always dark mode

  // State for greeting to avoid hydration errors
  const [greeting, setGreeting] = useState("Welcome");

  // Update greeting on client-side only
  useEffect(() => {
    const hour = new Date().getHours();
    let timeGreeting = "Welcome";
    if (hour < 12) timeGreeting = "Good morning";
    else if (hour < 18) timeGreeting = "Good afternoon";
    else timeGreeting = "Good evening";

    setGreeting(timeGreeting);
  }, []);

  // Load persisted state on mount
  useEffect(() => {
    if (persistedInputText) {
      setInputText(persistedInputText);
    }

    if (persistedFramework !== null && persistedFramework !== undefined) {
      setActiveFramework(persistedFramework);
    }

    if (persistedBuildOption !== null && persistedBuildOption !== undefined) {
      // Handle both old format (array) and new format (number)
      const buildOptionValue = Array.isArray(persistedBuildOption) ? persistedBuildOption[0] || 0 : persistedBuildOption;
      setBuildOption(buildOptionValue);
    }
    
    if (persistedAppType !== null && persistedAppType !== undefined) {
      setSelectedType(persistedAppType);
    }

    // Handle legacy prompt format
    if (prompt && !persistedInputText) {
      try {
        const promptObj = JSON.parse(prompt);
        if (promptObj['requirement']) {
          setInputText(promptObj['requirement']);
          setPersistedInputText(promptObj['requirement']);
        }
        if (promptObj['framework']) {
          const frameworkIndex = promptObj['framework'] === 'React JS' ? 1 :
            promptObj['framework'] === 'Vue JS' ? 2 : 0;
          setActiveFramework({ web: frameworkIndex });
          setPersistedFramework({ web: frameworkIndex });
        }
      } catch (error) {
        console.warn('Error parsing legacy prompt:', error);
      }
    }
  }, []);

  // Sync legacy prompt on mount
  useEffect(() => {
    if (prompt) {
      try {
        const promptObj = JSON.parse(prompt);
        setInputText(promptObj['requirement']);
        setActiveFramework(promptObj['framework'] === 'React JS' ? 1 :
          promptObj['framework'] === 'Vue JS' ? 2 : 0);
      } catch (error) {
        // Handle error silently
      }
    }
  }, []);

  // Remove automatic state persistence effects since we only want to store on submit



  // Check if user is logged in
  const isLoggedIn = () => {
    const idToken = Cookies.get('idToken');
    return !!idToken;
  };

  // Utility function to get selected frameworks array - can be used anywhere
  const getCurrentSelectedFrameworks = () => {
    const selectedBuildOptionIndex = Array.isArray(selectedBuildOption) ? selectedBuildOption[0] || 0 : selectedBuildOption || 0;
    const selectedBuildType = buildOptions[selectedBuildOptionIndex] ? buildOptions[selectedBuildOptionIndex].id : 'web';
    
    // Determine what build types to show based on selection
    const selectedBuildTypes = selectedBuildType === 'fullstack' ? ['frontend', 'backend'] : [selectedBuildType];
    
    let selectedFrameworks = {};
    
    if (typeof activeFramework === 'object' && activeFramework !== null) {
      selectedFrameworks = activeFramework;
    } else {
      const frameworkIndex = typeof activeFramework === 'number' ? activeFramework : 0;
      const framework = frameworks[frameworkIndex];
      if (framework) {
        const frameworkTypes = Array.isArray(framework.type) ? framework.type : [framework.type];
        frameworkTypes.forEach(type => {
          if (selectedBuildTypes.includes(type)) {
            selectedFrameworks[type] = frameworkIndex;
          } else if (selectedBuildTypes.includes('frontend') && (type === 'web' || type === 'mobile')) {
            // Map web/mobile to frontend for fullstack mode
            selectedFrameworks['frontend'] = frameworkIndex;
          }
        });
      }
    }
    
    return getSelectedFrameworksArray(selectedBuildTypes, selectedFrameworks);
  };

  // Function to get selected frameworks as an array
  const getSelectedFrameworksArray = (selectedBuildTypes, selectedFrameworks) => {
    const frameworkNames = [];
    
    selectedBuildTypes.forEach(buildType => {
      const frameworkIndex = selectedFrameworks[buildType];
      if (frameworkIndex !== undefined) {
        const framework = frameworks[frameworkIndex];
        if (framework) {
          frameworkNames.push(framework.label);
        }
      }
    });
    
    return frameworkNames;
  };

  // New function to collect data and redirect to beta.kavia.ai using hash fragments
  const handleDataCollectionAndRedirect = () => {
    try {
      // Get the selected build option details
      const selectedBuildOptionIndex = Array.isArray(selectedBuildOption) ? selectedBuildOption[0] || 0 : selectedBuildOption || 0;
      const selectedBuildType = buildOptions[selectedBuildOptionIndex] ? buildOptions[selectedBuildOptionIndex].id : 'web';
      
      // Get stack selection (Apps or Projects)
      const stackSelection = selectedType === 0 ? "Apps" : "Projects";
      
      // Get platform selection
      let platformSelection = selectedBuildType;
      if (selectedBuildType === 'web') platformSelection = 'Web';
      else if (selectedBuildType === 'mobile') platformSelection = 'Mobile';
      else if (selectedBuildType === 'backend') platformSelection = 'Backend';
      else if (selectedBuildType === 'fullstack') platformSelection = 'Fullstack';
      
      // Extract frontend and backend frameworks
      let frontendFramework = "";
      let backendFramework = "";
      
      if (selectedBuildType === 'fullstack') {
        // For fullstack, handle frontend and backend separately
        const frontendFrameworkIndex = activeFramework['frontend'];
        const backendFrameworkIndex = activeFramework['backend'];
        
        if (frontendFrameworkIndex !== undefined) {
          const fw = frameworks[frontendFrameworkIndex];
          if (fw) {
            frontendFramework = fw.label;
          }
        }
        
        if (backendFrameworkIndex !== undefined) {
          const bw = frameworks[backendFrameworkIndex];
          if (bw) {
            backendFramework = bw.label;
          }
        }
      } else {
        // For non-fullstack options
        const frameworkIndex = activeFramework[selectedBuildType];
        if (frameworkIndex !== undefined) {
          const framework = frameworks[frameworkIndex];
          if (framework) {
            const frameworkType = Array.isArray(framework.type) ? framework.type[0] : framework.type;
            
            if (frameworkType === 'web' || frameworkType === 'mobile' || (Array.isArray(framework.type) && (framework.type.includes('web') || framework.type.includes('mobile')))) {
              frontendFramework = framework.label;
            } else if (frameworkType === 'backend' || (Array.isArray(framework.type) && framework.type.includes('backend'))) {
              backendFramework = framework.label;
            }
          }
        }
      }
      
      // Create the userData object as specified
      const userData = {
        prompt: inputText || "",
        stack: stackSelection,
        platform: platformSelection,
        frontendFramework: frontendFramework,
        backendFramework: backendFramework,
        timestamp: Date.now()
      };
      
      console.log('Data collected for transfer:', userData);
      
      // Encode data as base64 for hash fragment transfer
      const jsonData = JSON.stringify(userData);
      const encodedData = btoa(jsonData);
      
      console.log('Encoded data length:', encodedData.length , encodedData);
      
      // Redirect to beta.kavia.ai with hash fragment containing encoded data
      const redirectUrl = `https://beta.kavia.ai/#data=${encodedData}`;
      
      console.log('Redirecting to beta.kavia.ai with hash data');
      
      // Redirect with hash fragment
      window.location.href = redirectUrl;
      
    } catch (error) {
      console.error('Error collecting and transferring data:', error);
      // Fallback: redirect without data
      window.location.href = 'https://beta.kavia.ai/';
    }
  };

  const handleSubmitAndFetchBlueprint = async () => {
    setIsLoading(true);
    
    // Check if user wants to use the new data collection flow
    // For now, we'll always use the new flow, but you can add conditions here
    if (true) { // Replace with your condition logic
      handleDataCollectionAndRedirect();
      return;
    }
    
    if (!idToken || !userId) {
      setPersistedInputText(inputText);
      setPersistedFramework(activeFramework);
      setPersistedBuildOption(Array.isArray(selectedBuildOption) ? selectedBuildOption[0] || 0 : selectedBuildOption);
      setPersistedAppType(selectedType);

      showAlert("Access denied. Please create an account or log in to proceed.", "info");
      // router.push('/users/sign_up');
      return;
    }
    
    try {
      // Handle single selection format
      const selectedBuildOptionIndex = Array.isArray(selectedBuildOption) ? selectedBuildOption[0] || 0 : selectedBuildOption || 0;
      const selectedBuildType = buildOptions[selectedBuildOptionIndex] ? buildOptions[selectedBuildOptionIndex].id : 'web';

      // Handle framework selection based on new format
      let selectedFrameworks = {};
      
      if (typeof activeFramework === 'object' && activeFramework !== null) {
        // New format: object with build type keys
        selectedFrameworks = activeFramework;
      } else {
        // Legacy format: single number - convert to new format
        const frameworkIndex = typeof activeFramework === 'number' ? activeFramework : 0;
        const framework = frameworks[frameworkIndex] || frameworks.find(f => f.isDefault);
        
        if (framework) {
          const frameworkTypes = Array.isArray(framework.type) ? framework.type : [framework.type];
          frameworkTypes.forEach(type => {
            if (selectedBuildType === 'fullstack') {
              if (type === 'web' || type === 'mobile') {
                selectedFrameworks['frontend'] = frameworkIndex;
              } else if (type === 'backend') {
                selectedFrameworks['backend'] = frameworkIndex;
              }
            } else if (type === selectedBuildType) {
              selectedFrameworks[selectedBuildType] = frameworkIndex;
            }
          });
        }
      }

      // Initialize variables
      let frontendFramework = "";
      let backendFramework = "";
      let platform = [];

      if (selectedBuildType === 'fullstack') {
        // For fullstack, handle frontend and backend separately
        const frontendFrameworkIndex = selectedFrameworks['frontend'];
        const backendFrameworkIndex = selectedFrameworks['backend'];
        
        if (frontendFrameworkIndex !== undefined) {
          const fw = frameworks[frontendFrameworkIndex];
          if (fw) {
            frontendFramework = fw.label;
            // Determine the frontend platform type (web or mobile)
            const frameworkType = Array.isArray(fw.type) ? fw.type[0] : fw.type;
            if (frameworkType === 'mobile' || (Array.isArray(fw.type) && fw.type.includes('mobile'))) {
              platform.push('mobile');
            } else if (frameworkType === 'web' || (Array.isArray(fw.type) && fw.type.includes('web'))) {
              platform.push('web');
            }
          }
        }
        
        if (backendFrameworkIndex !== undefined) {
          const bw = frameworks[backendFrameworkIndex];
          if (bw) {
            backendFramework = bw.label;
            platform.push('backend');
          }
        }
      } else {
        // For non-fullstack options
        const frameworkIndex = selectedFrameworks[selectedBuildType];
        if (frameworkIndex !== undefined) {
          const framework = frameworks[frameworkIndex];
          if (framework) {
            const frameworkType = Array.isArray(framework.type) ? framework.type[0] : framework.type;
            
            if (frameworkType === 'web' || frameworkType === 'mobile' || (Array.isArray(framework.type) && (framework.type.includes('web') || framework.type.includes('mobile')))) {
              frontendFramework = framework.label;
            } else if (frameworkType === 'backend' || (Array.isArray(framework.type) && framework.type.includes('backend'))) {
              backendFramework = framework.label;
            }
          }
        }
        
        platform.push(selectedBuildType);
      }

      // Remove duplicates from platform array
      platform = [...new Set(platform)];

      console.log('=== SUBMISSION DATA ===');
      console.log('Selected Build Type:', selectedBuildType);
      console.log('Frontend Framework:', frontendFramework);
      console.log('Backend Framework:', backendFramework);
      console.log('Platform:', platform);
      console.log('Selected Frameworks Object:', selectedFrameworks);
      console.log('Active Framework State:', activeFramework);

      // Get the mock data from our service, passing the selected framework and correct platform
      const blueprintData = await fetchProjectBlueprint(inputText, frontendFramework, backendFramework, platform);

      console.log("Blueprint Final response:", blueprintData);
      const project_id = blueprintData?.projectInfo?.id
      const projectName = blueprintData?.name
      sessionStorage.setItem('generated_project_id', blueprintData?.projectInfo?.id);
      // const { buildProjectUrl } = require('../utils/navigationHelpers');
      // const newProjectUrl = buildProjectUrl(project_id, 'code');
      // updateTabTitle(project_id, projectName);
      const org_name = getOrganizationId()
      const newProjectUrl = `/${org_name}/project/${project_id}/overview`
      addTab(projectName, newProjectUrl);

      setBlueprintData(blueprintData);
      clearPersistedState();
      setIsProjectCreationModalOpen(true);
    
    } catch (error) {
      console.error("Error in handleSubmitAndFetchBlueprint:", error);
      alert("Failed to generate project blueprint. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearPersistedState = () => {
    // Clear sessionStorage instead of localStorage
    sessionStorage.removeItem('kaviaWebsiteData');
    setPersistedInputText("");
    setPersistedFramework({ web: 0 });
    setPersistedBuildOption(0);
    setPersistedAppType(0);
  };

  const handleStartImplementation = async (state) => {
    console.log("=== START IMPLEMENTATION ===");
    console.log("Full state object:", state);
    console.log("Project Blueprint:", state?.projectBlueprint);
    
    setIsImplementing(true);
    if (parentCreateProject) {
      try {
        // Get the most up-to-date blueprint data from the state object
        const updatedBlueprint = state?.projectBlueprint || blueprintData;

        if (!updatedBlueprint) {
          console.error('No blueprint data available');
          return;
        }

        console.log("Updated Blueprint:",updatedBlueprint);

        // Call parent function with the complete updated blueprint (not just projectInfo)
        const projectResponse = await parentCreateProject(updatedBlueprint);

        console.log("Project Response:", projectResponse);
        
        // Close the modal
        setIsProjectCreationModalOpen(false);
      } catch (error) {
        console.error('Error creating project:', error);
      } finally {
        setIsImplementing(false);
      }
    }
  };

  return (
    <div className="h-screen overflow-y-auto scrollbar-hide" style={{
      scrollbarWidth: 'none', /* Firefox */
      msOverflowStyle: 'none', /* Internet Explorer 10+ */
    }}>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
      <div className="min-h-full flex items-center justify-center py-8">
        <div className={`w-full max-w-2xl px-4 flex flex-col items-center text-white transition-colors duration-500 ease-in-out pb-16`}>
        <div className={`w-full flex justify-center mb-6 transition-all duration-500 ease-in-out ${loggedInState ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
          <Image
            src={kaviaLogo}
            alt={"Kavia AI"}
            className={`transition-transform duration-500 ease-in-out ${
              !loggedInState ? 'w-16 h-16 max-w-16 max-h-16' : 'size-22'
            }`}
          />
        </div>

        <div className={`text-center mb-2 transition-opacity duration-500 ease-in-out ${loggedInState ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <p className={`text-gray-300 typography-heading-2 font-weight-medium transition-colors duration-500 ease-in-out`}>
            {`${greeting}, welcome back`}
          </p>
        </div>

        <h1 className={`self-stretch text-center justify-start text-white text-[32px] font-medium font-['Inter'] leading-[38.40px] pb-3 `}>
          What do you want to build today?
        </h1>

        <AppTypeSwitch selectedType={selectedType} setSelectedType={setSelectedType} isStreaming={isStreaming} isLight={isLight} />

        <div className="w-full min-h-[400px] flex flex-col items-center">
          {appTypeOptions[selectedType].label === "Apps" ? (
            <>
              <TextInput
                disabled={isStreaming || isLoading}
                loadingText={isLoading ? "Generating blueprint..." : loadingText}
                inputText={inputText}
                setInputText={setInputText}
                handleSubmit={handleSubmitAndFetchBlueprint}
                isLight={isLight}
              />

              <BuildOptionsButtons disabled={isStreaming} buildOption={selectedBuildOption} setBuildOption={setBuildOption} isLight={isLight} />
              {/* Scrollable container for framework options */}
              <div className="w-full overflow-y-auto max-h-[60vh] flex flex-col items-center">
                <StackOptions
                  frameworks={frameworks}
                  activeFramework={activeFramework}
                  setActiveFramework={setActiveFramework}
                  isStreaming={isStreaming}
                  isLight={isLight}
                  buildOption={selectedBuildOption}
                />
              </div>
            </>
          ) : (
            <ProjectSelectionComponent
              handleComplexProjectSubmit={handleComplexProjectSubmit}
              isComplexProjectSubmitting={isComplexProjectSubmitting}
              isLight={isLight}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>

        <ProjectCreationModal
          isOpen={isProjectCreationModalOpen}
          onClose={() => {
            setIsProjectCreationModalOpen(false);
            setBlueprintData(null); // Clear blueprint data when closing
          }}
          onStartImplementation={handleStartImplementation}
          initialBlueprint={blueprintData}
          frameworkOptions={frameworks}
          isImplementing={isImplementing}
        />
              </div>
      </div>
    </div>
  );
};

export default BuildContent;
