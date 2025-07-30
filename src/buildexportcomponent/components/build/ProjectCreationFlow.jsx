import React, { useState, useEffect } from 'react';
import { X, Check, Edit2, Palette, Code, Database } from 'lucide-react';

const ProjectCreationModal = ({
  isOpen,
  onClose,
  onStartImplementation,
  initialBlueprint,
  frameworkOptions = [],
  isImplementing = false
}) => {
  const [blueprint, setBlueprint] = useState(initialBlueprint || {});
  const [activeStep, setActiveStep] = useState(0);
  const [editingField, setEditingField] = useState(null);

  useEffect(() => {
    if (initialBlueprint) {
      setBlueprint(initialBlueprint);
    }
  }, [initialBlueprint]);

  if (!isOpen) return null;

  const steps = [
    { id: 'overview', label: 'Project Overview', icon: Check },
    { id: 'tech', label: 'Tech Stack', icon: Code },
    { id: 'features', label: 'Features', icon: Edit2 },
    { id: 'design', label: 'Design', icon: Palette }
  ];

  const handleFieldEdit = (field, value) => {
    setBlueprint(prev => ({
      ...prev,
      [field]: value
    }));
    setEditingField(null);
  };

  const handleTechStackEdit = (type, value) => {
    setBlueprint(prev => ({
      ...prev,
      techStack: {
        ...prev.techStack,
        [type]: Array.isArray(value) ? value : [value]
      }
    }));
  };

  const handleFeatureEdit = (index, value) => {
    const newFeatures = [...(blueprint.features || [])];
    newFeatures[index] = value;
    setBlueprint(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const addFeature = () => {
    setBlueprint(prev => ({
      ...prev,
      features: [...(prev.features || []), "New Feature"]
    }));
  };

  const removeFeature = (index) => {
    const newFeatures = (blueprint.features || []).filter((_, i) => i !== index);
    setBlueprint(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const handleImplement = () => {
    onStartImplementation({ projectBlueprint: blueprint });
  };

  const renderOverviewStep = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Project Name</label>
        {editingField === 'name' ? (
          <input
            type="text"
            value={blueprint.name || ''}
            onChange={(e) => handleFieldEdit('name', e.target.value)}
            onBlur={() => setEditingField(null)}
            onKeyPress={(e) => e.key === 'Enter' && setEditingField(null)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
            autoFocus
          />
        ) : (
          <div 
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white cursor-pointer hover:bg-gray-600 flex items-center justify-between"
            onClick={() => setEditingField('name')}
          >
            <span>{blueprint.name || 'Untitled Project'}</span>
            <Edit2 size={16} />
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
        {editingField === 'description' ? (
          <textarea
            value={blueprint.description || ''}
            onChange={(e) => handleFieldEdit('description', e.target.value)}
            onBlur={() => setEditingField(null)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white h-24"
            autoFocus
          />
        ) : (
          <div 
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white cursor-pointer hover:bg-gray-600 flex items-start justify-between min-h-[60px]"
            onClick={() => setEditingField('description')}
          >
            <span className="flex-1">{blueprint.description || 'No description provided'}</span>
            <Edit2 size={16} className="ml-2 mt-1" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Estimated Time</label>
          <div className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
            {blueprint.estimatedTime || 'Not specified'}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Complexity</label>
          <div className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white capitalize">
            {blueprint.complexity || 'Not specified'}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechStackStep = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Frontend</label>
        <div className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
          {blueprint.techStack?.frontend?.join(', ') || 'None'}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Backend</label>
        <div className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
          {blueprint.techStack?.backend?.join(', ') || 'None'}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Database</label>
        <div className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
          {blueprint.techStack?.database?.join(', ') || 'None'}
        </div>
      </div>
    </div>
  );

  const renderFeaturesStep = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-300">Features</label>
        <button
          onClick={addFeature}
          className="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded text-sm"
        >
          Add Feature
        </button>
      </div>
      
      <div className="space-y-2">
        {(blueprint.features || []).map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            {editingField === `feature-${index}` ? (
              <input
                type="text"
                value={feature}
                onChange={(e) => handleFeatureEdit(index, e.target.value)}
                onBlur={() => setEditingField(null)}
                onKeyPress={(e) => e.key === 'Enter' && setEditingField(null)}
                className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded text-white"
                autoFocus
              />
            ) : (
              <div 
                className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded text-white cursor-pointer hover:bg-gray-600"
                onClick={() => setEditingField(`feature-${index}`)}
              >
                {feature}
              </div>
            )}
            <button
              onClick={() => removeFeature(index)}
              className="p-2 text-red-400 hover:text-red-300"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDesignStep = () => (
    <div className="space-y-6">
      {!blueprint.isBackendOnly && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Theme</label>
            <div className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white capitalize">
              {blueprint.theme || 'Light'}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Color Scheme</label>
            <div className="grid grid-cols-3 gap-4">
              {blueprint.colors && Object.entries(blueprint.colors).map(([key, color]) => (
                <div key={key} className="text-center">
                  <div 
                    className="w-full h-12 rounded-lg border border-gray-600 mb-2"
                    style={{ backgroundColor: color }}
                  ></div>
                  <span className="text-sm text-gray-300 capitalize">{key}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Layout Description</label>
        <div className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
          {blueprint.layoutDescription || 'No layout description provided'}
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (steps[activeStep].id) {
      case 'overview': return renderOverviewStep();
      case 'tech': return renderTechStackStep();
      case 'features': return renderFeaturesStep();
      case 'design': return renderDesignStep();
      default: return renderOverviewStep();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Project Configuration</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Steps */}
        <div className="flex border-b border-gray-700">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`flex-1 p-4 text-center border-r border-gray-700 last:border-r-0 transition-colors ${
                activeStep === index
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <step.icon size={20} className="mx-auto mb-1" />
              <div className="text-sm">{step.label}</div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-700">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>

          <button
            onClick={handleImplement}
            disabled={isImplementing}
            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isImplementing ? 'Implementing...' : 'Start Implementation'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreationModal;
