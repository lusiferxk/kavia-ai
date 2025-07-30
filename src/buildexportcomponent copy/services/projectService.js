// src/services/projectService.js
// Updated to handle backend-only projects properly

/**
 * Project Service for handling project-related operations
 */

/**
 * Determines if the project is backend-only based on selected frameworks and API response
 * @param {string} selectedfrontendFramework - Selected frontend framework
 * @param {string} selectedbackendFramework - Selected backend framework
 * @param {Object} projectInitResponse - API response from project initialization
 * @returns {boolean} - True if this is a backend-only project
 */
const isBackendOnlyProject = (selectedfrontendFramework, selectedbackendFramework, projectInitResponse) => {
  // Check if frontend framework is explicitly "None" or empty
  const frontendIsNone = !selectedfrontendFramework || 
                         selectedfrontendFramework.trim() === "" || 
                         selectedfrontendFramework === "None";
  
  // Check if backend framework is selected
  const backendIsSelected = selectedbackendFramework && 
                           selectedbackendFramework.trim() !== "" && 
                           selectedbackendFramework !== "None";
  
  // Check API response structure - backend projects have backend container but no frontend
  const hasBackendContainer = projectInitResponse.backend?.container;
  const hasFrontendContainer = projectInitResponse.frontend?.container;
  
  return (frontendIsNone && backendIsSelected) || (hasBackendContainer && !hasFrontendContainer);
};

/**
 * Mock API call for project initialization
 */
const mockStartProjectInit = async (
  projectDescription, 
  project_name, 
  selectedfrontendFramework, 
  selectedbackendFramework, 
  selectedBuildTypes
) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock response structure
  return {
    projectNodeInfo: {
      id: Math.random().toString(36).substring(2, 9),
      name: project_name || "New Project"
    },
    llmResponse: {
      projectTitle: project_name || "New Project",
      description: projectDescription,
      overview: {
        project_name: project_name || "New Project",
        description: projectDescription,
        frontend_framework: selectedfrontendFramework || "React 19",
        backend_framework: selectedbackendFramework || "FastAPI",
        database_framework: "PostgreSQL"
      },
      features: [
        "User Authentication",
        "Dashboard",
        "Data Management",
        "API Integration"
      ],
      frontend: {
        container: {
          framework: selectedfrontendFramework || "React 19",
          theme: "light",
          layoutDescription: "Modern responsive layout"
        }
      },
      backend: {
        container: {
          framework: selectedbackendFramework || "FastAPI",
          features: ["REST API", "Database Integration", "Authentication"]
        }
      },
      colors: {
        primary: "#4CAF50",
        secondary: "#FFC107",
        accent: "#2196F3"
      },
      layoutDescription: "Modern responsive layout with clean design"
    }
  };
};

/**
 * Fetches the project blueprint based on the user input
 * @param {string} projectDescription - The user's project description
 * @param {string} selectedfrontendFramework - Selected frontend framework
 * @param {string} selectedbackendFramework - Selected backend framework
 * @param {Array} selectedBuildTypes - Array of selected build types
 * @param {string} project_name - Optional project name
 * @returns {Promise<Object>} - The project blueprint object
 */
export const fetchProjectBlueprint = async (
  projectDescription, 
  selectedfrontendFramework = "", 
  selectedbackendFramework = "", 
  selectedBuildTypes = [], 
  project_name = ""
) => {  
  try {
    // Validate inputs
    if (!projectDescription || projectDescription.trim() === "") {
      throw new Error("Project description is required");
    }

    console.log("=== INPUT VALIDATION ===");
    console.log("Project Description:", projectDescription);
    console.log("Frontend Framework:", selectedfrontendFramework);
    console.log("Backend Framework:", selectedbackendFramework);
    console.log("Build Types:", selectedBuildTypes);
    console.log("Project Name:", project_name);

    console.log("=== CALLING MOCK API ===");
    const projectInitResp = await mockStartProjectInit(
      projectDescription, 
      project_name, 
      selectedfrontendFramework, 
      selectedbackendFramework, 
      selectedBuildTypes
    );
    
    console.log("=== RAW API RESPONSE ===");
    console.log("Full Response:", projectInitResp);

    // Validate API response
    if (!projectInitResp) {
      console.error("No response received from API");
      throw new Error("No response received from API");
    }

    if (!projectInitResp.llmResponse) {
      console.error("Invalid API response: Missing llmResponse");
      console.error("Available keys:", Object.keys(projectInitResp));
      throw new Error("Invalid API response: Missing llmResponse");
    }

    const projectInitResponse = projectInitResp.llmResponse;
    console.log("=== LLM RESPONSE ===");
    console.log("LLM Response:", projectInitResponse);
    
    // Extract data from the actual API response structure with fallbacks
    const overview = projectInitResponse.overview || {};
    const frontend = projectInitResponse.frontend || {};
    const backend = projectInitResponse.backend || {};
    
    console.log("=== EXTRACTED DATA ===");
    console.log("Overview:", overview);
    console.log("Frontend:", frontend);
    console.log("Backend:", backend);

    // Determine if this is a backend-only project
    const isBackendOnly = isBackendOnlyProject(selectedfrontendFramework, selectedbackendFramework, projectInitResponse);
    console.log("=== PROJECT TYPE ===");
    console.log("Is Backend Only:", isBackendOnly);

    // Build tech stack based on selected frameworks and project type
    const techStack = {
      frontend: [],
      backend: [],
      database: []
    };
    
    console.log("=== BUILDING TECH STACK ===");
    
    // Handle tech stack based on project type
    if (isBackendOnly) {
      // Backend-only project logic
      console.log("Processing backend-only project");
      
      // Set frontend to "None" for backend-only projects
      techStack.frontend = ["None"];
      
      // Add backend framework
      if (selectedbackendFramework && selectedbackendFramework.trim() !== "" && selectedbackendFramework !== "None") {
        console.log(`Adding selected backend framework: ${selectedbackendFramework}`);
        techStack.backend.push(selectedbackendFramework);
      } else if (backend.container?.framework) {
        console.log(`Adding backend framework from API: ${backend.container.framework}`);
        techStack.backend.push(backend.container.framework);
      } else if (overview.backend_framework) {
        console.log(`Adding backend framework from overview: ${overview.backend_framework}`);
        techStack.backend.push(overview.backend_framework);
      }
      
    } else {
      // Frontend/fullstack project logic (existing logic)
      if (selectedfrontendFramework && selectedfrontendFramework.trim() !== "" && selectedfrontendFramework !== "None") {
        console.log(`Adding frontend framework: ${selectedfrontendFramework}`);
        techStack.frontend.push(selectedfrontendFramework);
      }
      
      if (selectedbackendFramework && selectedbackendFramework.trim() !== "" && selectedbackendFramework !== "None") {
        console.log(`Adding backend framework: ${selectedbackendFramework}`);
        techStack.backend.push(selectedbackendFramework);
      }
      
      // Process build types for additional framework mapping
      if (selectedBuildTypes && selectedBuildTypes.length > 0) {
        console.log("Processing build types:", selectedBuildTypes);
        
        selectedBuildTypes.forEach(buildType => {
          console.log(`Processing build type: ${buildType}`);
          
          switch (buildType) {
            case 'web':
              if (techStack.frontend.length === 0 && overview.frontend_framework) {
                console.log(`Adding web framework from API: ${overview.frontend_framework}`);
                techStack.frontend.push(overview.frontend_framework);
              }
              break;
            case 'mobile':
              if (techStack.frontend.length === 0 && overview.frontend_framework) {
                console.log(`Adding mobile framework from API: ${overview.frontend_framework}`);
                techStack.frontend.push(overview.frontend_framework);
              }
              break;
            case 'backend':
              if (techStack.backend.length === 0 && overview.backend_framework) {
                console.log(`Adding backend framework from API: ${overview.backend_framework}`);
                techStack.backend.push(overview.backend_framework);
              }
              break;
            case 'database':
              if (overview.database_framework) {
                console.log(`Adding database framework from API: ${overview.database_framework}`);
                techStack.database.push(overview.database_framework);
              }
              break;
            default:
              console.log(`Unknown build type: ${buildType}`);
          }
        });
      }
      
      // Fallback to API response frameworks if none selected
      if (techStack.frontend.length === 0 && overview.frontend_framework) {
        console.log(`Using API frontend framework: ${overview.frontend_framework}`);
        techStack.frontend.push(overview.frontend_framework);
      }
      if (techStack.backend.length === 0 && overview.backend_framework) {
        console.log(`Using API backend framework: ${overview.backend_framework}`);
        techStack.backend.push(overview.backend_framework);
      }
    }
    
    // Handle database framework
    if (techStack.database.length === 0 && overview.database_framework) {
      console.log(`Using API database framework: ${overview.database_framework}`);
      techStack.database.push(overview.database_framework);
    }
    
    // Ensure arrays have default values if empty
    if (techStack.frontend.length === 0) {
      console.log("No frontend frameworks, setting default based on project type");
      techStack.frontend = [isBackendOnly ? "None" : "React 19"];
    }
    if (techStack.backend.length === 0) {
      console.log("No backend frameworks, setting to 'None'");
      techStack.backend = ["None"];
    }
    if (techStack.database.length === 0) {
      console.log("No database frameworks, setting to 'None'");
      techStack.database = ["None"];
    }
    
    console.log("=== FINAL TECH STACK ===");
    console.log("Tech Stack:", techStack);
    
    // Build blueprint with conditional properties based on project type
    const blueprint = {
      id: projectInitResp.projectNodeInfo?.id || Math.random().toString(36).substring(2, 9),
      name: projectInitResponse.projectTitle || overview.project_name || project_name || projectDescription || "New Project",
      description: projectInitResponse.description || overview.description || projectDescription || "",
      features: projectInitResponse.features || backend.container?.features || [],
      techStack: techStack,
      estimatedTime: "1-2 weeks",
      complexity: "simple",
      projectInfo: projectInitResp.projectNodeInfo || null,
      isBackendOnly: isBackendOnly
    };

    // Only add architecturePattern if it's provided by the API
    if (projectInitResponse.architecturePattern) {
      blueprint.architecturePattern = projectInitResponse.architecturePattern;
    }

    // Add frontend-specific properties only for non-backend-only projects
    if (!isBackendOnly) {
      blueprint.colors = projectInitResponse.colors || {
        primary: "#4CAF50",
        secondary: "#FFC107",
        accent: "#2196F3"
      };
      blueprint.theme = frontend.container?.theme || "light";
      blueprint.layoutDescription = projectInitResponse.layoutDescription || 
                                   frontend.container?.layoutDescription || 
                                   "Modern responsive layout";
    } else {
      // Backend-only projects don't need colors, theme, or layout description
      console.log("Backend-only project: Skipping frontend-specific properties");
      blueprint.layoutDescription = projectInitResponse.layoutDescription || 
                                   "RESTful API architecture with clear endpoint organization";
    }
    
    console.log("=== FINAL BLUEPRINT ===");
    console.log("Blueprint:", blueprint);
    
    return blueprint;
    
  } catch (error) {
    console.error("=== ERROR IN FETCH BLUEPRINT ===");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    // Provide specific error messages based on error type
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error("Network error: Unable to connect to the server. Please check your internet connection and try again.");
    }
    
    if (error.message.includes('Failed to initialize project')) {
      throw new Error("Server error: The project initialization service is currently unavailable. Please try again later.");
    }
    
    if (error.message.includes('Invalid API response')) {
      throw new Error("Server error: Received invalid response from the API. Please try again.");
    }
    
    if (error.message.includes('Project description is required')) {
      throw new Error("Please provide a project description before proceeding.");
    }
    
    // Re-throw the original error with more context
    throw new Error(`Failed to generate project blueprint: ${error.message}`);
  }
};

/**
 * Implements the project based on the blueprint
 * @param {Object} blueprintData - The project blueprint data
 * @returns {Promise<Object>} - The implemented project response
 */
export const implementProject = async (blueprintData) => {
  try {
    console.log("=== IMPLEMENT PROJECT ===");
    console.log("Blueprint Data:", blueprintData);
    
    // Verify we have the project ID from the blueprint
    if (!blueprintData.id) {
      console.error("No project ID found in the blueprint data!");
      throw new Error("Missing project ID in blueprint data");
    }
    
    // Simulate network delay for API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Use the ID from the blueprint instead of generating a new one
    const projectId = blueprintData.id;
    
    // Extract project details from the blueprint data
    // This includes any modifications made in the ProjectCreationModal
    const projectName = blueprintData.name || "New Project";
    const projectDesc = blueprintData.description || "";
    const featuresCount = blueprintData.features?.length || 0;
    
    // Handle framework names based on project type
    let frameworkName, languageName;
    
    if (blueprintData.isBackendOnly) {
      frameworkName = blueprintData.techStack?.backend?.[0] || "FastAPI";
      // Determine language based on backend framework
      const backendFramework = blueprintData.techStack?.backend?.[0] || "FastAPI";
      if (backendFramework.includes("Python") || backendFramework.includes("FastAPI") || backendFramework.includes("Django")) {
        languageName = "Python";
      } else if (backendFramework.includes("Node.js") || backendFramework.includes("Express")) {
        languageName = "JavaScript (ES6+)";
      } else if (backendFramework.includes("Ruby")) {
        languageName = "Ruby";
      } else if (backendFramework.includes("PHP")) {
        languageName = "PHP";
      } else if (backendFramework.includes("Java")) {
        languageName = "Java";
      } else {
        languageName = "Python"; // Default fallback
      }
    } else {
      frameworkName = blueprintData.techStack?.frontend?.[0] || "React 19";
      // Determine language based on frontend framework
      const frontendFramework = blueprintData.techStack?.frontend?.[0] || "React 19";
      if (frontendFramework.includes("React") || frontendFramework.includes("Next.js") || frontendFramework.includes("Vue.js") || frontendFramework.includes("Angular") || frontendFramework.includes("Svelte")) {
        languageName = "JavaScript (ES6+)";
      } else if (frontendFramework.includes("TypeScript")) {
        languageName = "TypeScript";
      } else {
        languageName = "JavaScript (ES6+)"; // Default fallback
      }
    }
    
    // projectInit API response
    const projectInitResponse = {
      success: true,
      id: projectId, // Use the same ID from the blueprint
      properties: {
        Title: projectName,
        Name: projectName,
        Status: "In Progress",
        CreatedAt: new Date().toISOString(),
        Description: projectDesc,
        Features: featuresCount,
        Framework: frameworkName,
        Language: languageName,
        ProjectType: blueprintData.isBackendOnly ? "Backend API" : "Full Stack Application"
      },
      message: `${blueprintData.isBackendOnly ? 'Backend API' : 'Project'} implementation started successfully!`
    };
    
    console.log("=== PROJECT INIT RESPONSE ===");
    console.log("Response:", projectInitResponse);
    
    return projectInitResponse;
    
  } catch (error) {
    console.error("=== ERROR IN IMPLEMENT PROJECT ===");
    console.error("Error:", error);
    throw new Error(`Failed to implement project: ${error.message}`);
  }
};
