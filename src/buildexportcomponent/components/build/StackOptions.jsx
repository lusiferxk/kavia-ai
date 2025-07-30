import React from 'react';
import Image from 'next/image';
import { Generic } from '../ui/Generic';
import { BootstrapTooltip } from '../ui/BootstrapTooltip';
import { buildOptions } from './BuildOptionsButtons';

const StackOptions = ({ frameworks, activeFramework, setActiveFramework, isStreaming, isLight, buildOption }) => {
  // Convert to single selection - use first element if array, otherwise use as number
  const selectedBuildOption = Array.isArray(buildOption) ? buildOption[0] || 0 : buildOption || 0;
  
  // Get the selected build type
  const selectedBuildType = buildOptions[selectedBuildOption] ? buildOptions[selectedBuildOption].id : 'web';
  
  // Determine what build types to show based on selection
  const selectedBuildTypes = selectedBuildType === 'fullstack' ? ['frontend', 'backend'] : [selectedBuildType];

  // Group frameworks by type for display
  const frameworksByType = {};
  if (selectedBuildType === 'fullstack') {
    // For fullstack, combine web and mobile frameworks as frontend
    frameworksByType['frontend'] = frameworks.filter(framework => {
      if (Array.isArray(framework.type)) {
        return framework.type.includes('web') || framework.type.includes('mobile');
      }
      return framework.type === 'web' || framework.type === 'mobile';
    });
    frameworksByType['backend'] = frameworks.filter(framework => {
      if (Array.isArray(framework.type)) {
        return framework.type.includes('backend');
      }
      return framework.type === 'backend';
    });
  } else {
    // For single selection, use normal grouping
    selectedBuildTypes.forEach(buildType => {
      frameworksByType[buildType] = frameworks.filter(framework => {
        if (Array.isArray(framework.type)) {
          return framework.type.includes(buildType);
        }
        return framework.type === buildType;
      });
    });
  }

  // Convert activeFramework to an object format for independent selection
  const [frameworkSelections, setFrameworkSelections] = React.useState(() => {
    if (typeof activeFramework === 'number') {
      // Legacy format - convert to new format
      const selectedFramework = frameworks[activeFramework];
      if (selectedFramework) {
        const frameworkTypes = Array.isArray(selectedFramework.type) ? selectedFramework.type : [selectedFramework.type];
        const selections = {};
        frameworkTypes.forEach(type => {
          if (selectedBuildTypes.includes(type)) {
            selections[type] = activeFramework;
          }
        });
        return selections;
      }
    } else if (typeof activeFramework === 'object' && activeFramework !== null) {
      // New format - use as is
      return activeFramework;
    }
    
    // Default selections for each build type
    const defaultSelections = {};
    selectedBuildTypes.forEach(buildType => {
      const typeFrameworks = frameworksByType[buildType] || [];
      const defaultFramework = typeFrameworks.find(f => f.isDefault) || typeFrameworks[0];
      if (defaultFramework) {
        const originalIndex = frameworks.findIndex(f => f.key === defaultFramework.key);
        defaultSelections[buildType] = originalIndex;
      }
    });
    return defaultSelections;
  });

  // Update parent component when our internal selections change
  React.useEffect(() => {
    setActiveFramework(frameworkSelections);
  }, [frameworkSelections, setActiveFramework]);

  // Update selections when build options change
  React.useEffect(() => {
    const newSelections = { ...frameworkSelections };
    
    // Add default selections for new build types
    selectedBuildTypes.forEach(buildType => {
      if (!(buildType in newSelections)) {
        const typeFrameworks = frameworksByType[buildType] || [];
        const defaultFramework = typeFrameworks.find(f => f.isDefault) || typeFrameworks[0];
        if (defaultFramework) {
          const originalIndex = frameworks.findIndex(f => f.key === defaultFramework.key);
          newSelections[buildType] = originalIndex;
        }
      }
    });
    
    // Remove selections for build types that are no longer selected
    Object.keys(newSelections).forEach(buildType => {
      if (!selectedBuildTypes.includes(buildType)) {
        delete newSelections[buildType];
      }
    });
    
    setFrameworkSelections(newSelections);
  }, [selectedBuildOption]);

  // Handle framework selection for a specific build type
  const handleFrameworkSelect = (buildType, frameworkIndex) => {
    if (isStreaming) return;
    
    setFrameworkSelections(prev => ({
      ...prev,
      [buildType]: frameworkIndex
    }));
  };

  // Check if a framework is selected for a specific build type
  const isFrameworkSelected = (buildType, frameworkIndex) => {
    return frameworkSelections[buildType] === frameworkIndex;
  };

  // Don't show framework selection if generic is selected
  const showFrameworkSelection = !selectedBuildTypes.includes('generic');

  if (!showFrameworkSelection) {
    return null;
  }

  return (
    <div className="text-center w-full group">
      <p className={`${isLight ? "text-gray-500" : "text-gray-500"} italic text-sm sm:text-base mb-2 mt-2 px-2`}>
        Select the framework to start building
      </p>

      {selectedBuildType !== 'fullstack' ? (
        // Single build type - show frameworks in a responsive grid/row
        <div className="flex justify-center w-full pb-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-1 transition-all duration-300 max-w-full">
            {frameworksByType[selectedBuildTypes[0]]?.map((framework) => {
              const index = frameworks.findIndex(f => f.key === framework.key);
              const isSelected = isFrameworkSelected(selectedBuildTypes[0], index);
              const logoColor = isLight ? "#1F2937" : "#DAD9D9";

              return (
                <BootstrapTooltip
                  key={index}
                  title={framework.label}
                  placement="top"
                >
                  <div
                    className={`${isStreaming ? 'cursor-not-allowed' : 'cursor-pointer'}
                      ${isStreaming && "opacity-75"}
                      w-11 h-11 sm:w-12 sm:h-12 shadow-sm flex-shrink-0
                      ${isSelected ? "border-orange-500" : `${isLight ? "border-gray-300" : "border-gray-700"}`}
                      ${isLight ? "hover:border-orange-400" : "hover:border-orange-600"}
                      ${isLight ? "bg-gray-100 backdrop-blur-sm" : "bg-[#231F20]"}
                      rounded-[8px] flex items-center justify-center border-[1px]
                      transition-all duration-300
                      ${isSelected ? "scale-105 sm:scale-110 z-20" : "hover:z-10 hover:scale-[1.02] sm:hover:scale-105"}`}
                    onClick={() => handleFrameworkSelect(selectedBuildTypes[0], index)}
                  >
                    <div className={`p-1 rounded-md ${isLight ? "bg-gray-800/10" : ""}`}>
                      {framework.icon ? (
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${isSelected ? "opacity-100" : "opacity-50"}`}
                          style={{
                            filter: `${isLight ? "invert(0) brightness(0)" : ""}`,
                            color: logoColor,
                            fill: logoColor
                          }}
                        >
                          <Image
                            src={framework.icon}
                            alt={framework.label}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            style={{
                              filter: `brightness(0) ${isLight ? "invert(0)" : "invert(1)"}`,
                              fill: logoColor
                            }}
                          />
                        </div>
                      ) : (
                        <Generic color={logoColor}
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${isSelected ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
                        />
                      )}
                    </div>
                  </div>
                </BootstrapTooltip>
              );
            })}
          </div>
        </div>
      ) : (
        // Fullstack - show frameworks grouped by type with proper spacing
        <div className="space-y-6 sm:space-y-8 w-full pb-6">
          {selectedBuildTypes.map((buildType, typeIndex) => {
            const typeFrameworks = frameworksByType[buildType] || [];
            if (typeFrameworks.length === 0) return null;

            return (
              <div key={buildType} className="space-y-3 sm:space-y-4">
                <h3 className={`text-sm sm:text-base font-medium ${isLight ? "text-gray-700" : "text-gray-300"} px-2`}>
                  {buildType === 'frontend' ? 'Frontend' : buildType.charAt(0).toUpperCase() + buildType.slice(1)} Frameworks
                </h3>
                <div className="flex justify-center w-full">
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-1 transition-all duration-300 max-w-full">
                    {typeFrameworks.map((framework) => {
                      const index = frameworks.findIndex(f => f.key === framework.key);
                      const isSelected = isFrameworkSelected(buildType, index);
                      const logoColor = isLight ? "#1F2937" : "#DAD9D9";

                      return (
                        <BootstrapTooltip
                          key={index}
                          title={framework.label}
                          placement="top"
                        >
                          <div
                            className={`${isStreaming ? 'cursor-not-allowed' : 'cursor-pointer'}
                              ${isStreaming && "opacity-75"}
                              w-11 h-11 sm:w-12 sm:h-12 shadow-sm flex-shrink-0
                              ${isSelected ? "border-orange-500" : `${isLight ? "border-gray-300" : "border-gray-700"}`}
                              ${isLight ? "hover:border-orange-400" : "hover:border-orange-600"}
                              ${isLight ? "bg-gray-100 backdrop-blur-sm" : "bg-[#231F20]"}
                              rounded-[8px] flex items-center justify-center border-[1px]
                              transition-all duration-300
                              ${isSelected ? "scale-105 sm:scale-110 z-20" : "hover:z-10 hover:scale-[1.02] sm:hover:scale-105"}`}
                            onClick={() => handleFrameworkSelect(buildType, index)}
                          >
                            <div className={`p-1 rounded-md ${isLight ? "bg-gray-800/10" : ""}`}>
                              {framework.icon ? (
                                <div
                                  className={`w-5 h-5 sm:w-6 sm:h-6 ${isSelected ? "opacity-100" : "opacity-50"}`}
                                  style={{
                                    filter: `${isLight ? "invert(0) brightness(0)" : ""}`,
                                    color: logoColor,
                                    fill: logoColor
                                  }}
                                >
                                  <Image
                                    src={framework.icon}
                                    alt={framework.label}
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    style={{
                                      filter: `brightness(0) ${isLight ? "invert(0)" : "invert(1)"}`,
                                      fill: logoColor
                                    }}
                                  />
                                </div>
                              ) : (
                                <Generic color={logoColor}
                                  className={`w-5 h-5 sm:w-6 sm:h-6 ${isSelected ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
                                />
                              )}
                            </div>
                          </div>
                        </BootstrapTooltip>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StackOptions;
