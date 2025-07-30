import { useState } from 'react';
import { ArrowUpRight, Briefcase, FolderPlus } from 'lucide-react';
import Cookies from 'js-cookie';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import AdvancedApplicationForm from './AdvancedApplicationForm';
import ImportProjectForm from './ImportProjectForm';
import { fetchProjectBlueprint } from '../../services/projectService';
import { frameworks } from '../BuildContent';
import { extractTextFromFile } from '../../utils/api';

const projectOptions = [
  {
    id: 'create',
    title: 'Create Advanced Applications',
    description: 'Build complex software projects with several containers and components',
    sheetTitle: 'Create Advanced Applications',
    icon: Briefcase
  },
  {
    id: 'import',
    title: 'Import Existing Codebase',
    description: 'Migrate your existing project to Kavia To Kavia to Understand, Modify and Extract',
    sheetTitle: 'Import Existing Assets',
    icon: FolderPlus
  }
];

const ProjectSelectionComponent = ({ handleComplexProjectSubmit, isComplexProjectSubmitting, isLight, setIsModalOpen }) => {
  const [createOpen, setCreateOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  const handleSubmit = async (formData) => {
    const isLoggedIn = Cookies.get('idToken');
    if (!isLoggedIn) {
      setCreateOpen(false);
      setIsModalOpen(true);
      return;
    }
    
    setIsLoading(true);
    try {
      // Use React as default framework for now
      const defaultFramework = frameworks.find(f => f.isDefault && f.type === 'web') || frameworks[0];
      const selectedFrontendFrameworkName = defaultFramework?.label || "";
      const selectedBackendFramework = ""; 
      const selectedBuildTypes = ["web"]; 
      
      console.log("=== FRAMEWORK SELECTION ===");
      console.log("Selected Frontend Framework:", selectedFrontendFrameworkName);
      console.log("Selected Backend Framework:", selectedBackendFramework);
      console.log("Selected Build Types:", selectedBuildTypes);
      
      // fetchProjectBlueprint(projectDescription, selectedfrontendFramework, selectedbackendFramework, selectedBuildTypes, project_name)
      const blueprintData = await fetchProjectBlueprint(
        formData.projectGoal,           
        selectedFrontendFrameworkName,  
        selectedBackendFramework,       
        selectedBuildTypes,             
        formData.projectName        
      );
      
      // Update the project name from the form data
      if (blueprintData) {
        blueprintData.name = formData.projectName || blueprintData.name;
        blueprintData.files = formData.files || [];
      }

      if(blueprintData?.projectInfo?.id){
        if (formData.files && formData.files.length > 0) {
          const processedFiles = formData.files.map((file, i) => ({
            id: Date.now() + i,
            name: file.name,
            type: file.type.includes("pdf") ? "PDF" : file.type,
            size: formatBytes(file.size),
            author: "Unknown",
            tags: ["document"],
            status: "processing",
            progress: 0,
            percentage: 0,
            fileObject: file,
          }));

          for (const doc of processedFiles) {
            try {
              await extractTextFromFile(blueprintData?.projectInfo?.id, [doc.fileObject]);
            } catch (fileError) {
              console.error(`Error extracting text from file ${doc.name}:`, fileError);
            }
          }
        }
      }
      
      // Directly call the complex project submit handler
      await handleComplexProjectSubmit(blueprintData);
      
      // Close the sheet
      setCreateOpen(false);
    } catch (error) {
      console.error("Error fetching project blueprint:", error);
      alert("Failed to generate project blueprint. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImportSubmit = async (importData) => {
    console.log("Import project data:", importData);
    // Handle import logic here
    setImportOpen(false);
  };

  return (
    <div className="flex mt-8 items-center justify-center gap-6 mx-auto">
      {projectOptions.map((option) => {
        const Icon = option.icon;
        const isCreate = option.id === "create";
        const open = isCreate ? createOpen : importOpen;
        const setOpen = isCreate ? setCreateOpen : setImportOpen;

        return (
          <Sheet key={option.id} open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <div
                className={`w-80 h-60 rounded-lg p-4 flex text-left items-start flex-col border ${isLight ? "border-gray-200 hover:border-orange-400" : "border-white/10"} hover:border-orange-400/50 hover:text-orange-400 ${isLight ? "text-gray-600" : "text-gray-500"} cursor-pointer ${isLight ? "bg-white hover:bg-gradient-to-b hover:from-orange-50 hover:via-transparent hover:to-transparent" : "bg-white/5 hover:bg-gradient-to-b hover:from-orange-400/10 hover:via-transparent hover:to-transparent"} transition-all duration-300`}
              >
                <Icon size={40} className={`${isLight ? "text-orange-500" : "text-orange-400"} mb-4`} />

                <h3 className={`${isLight ? "text-gray-800" : "text-white"} typography-body-lg font-weight-medium mb-4`}>
                  {option.title}
                </h3>

                <p className={`${isLight ? "text-gray-600" : "text-gray-400"} typography-body-sm mb-auto`}>
                  {option.description}
                </p>

                <div className="flex justify-start mt-4">
                  <div>
                    <ArrowUpRight size={24} className={isLight ? "text-orange-500" : "text-orange-400"} />
                  </div>
                </div>
              </div>
            </SheetTrigger>
            <SheetContent theme={isLight ? "light" : "dark"}>
              <SheetHeader>
                <SheetTitle>
                  <Icon size={40} className={`${isLight ? "text-orange-500" : "text-orange-400"} mt-4`} />
                  <h1 className={`${isLight ? "text-gray-800" : "text-white"} typography-heading-2 font-weight-light mt-6`}>{option.sheetTitle}</h1>
                </SheetTitle>
              </SheetHeader>

              {isCreate ? (
                <AdvancedApplicationForm
                  handleProjectSubmit={handleSubmit}
                  submitting={isLoading || isComplexProjectSubmitting}
                  isLight={isLight}
                />
              ) : (
                <ImportProjectForm 
                  isLight={isLight}
                  handleProjectSubmit={handleImportSubmit}
                />
              )}
            </SheetContent>
          </Sheet>
        );
      })}
    </div>
  );
};

export default ProjectSelectionComponent;
