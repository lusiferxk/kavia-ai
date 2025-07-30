# KAVIA Website Data Retrieval Plan for beta.kavia.ai

## Overview
This document outlines how to retrieve and use the form data collected from the KAVIA website in the beta.kavia.ai application using hash fragment transfer.

## Data Transfer Method
Data is transferred from kavia.ai to beta.kavia.ai using hash fragments (#) which are:
- Client-side only (no server involvement)
- Have much higher length limits than URL parameters
- Perfect for transferring large prompt data between domains
- Not sent to the server, ensuring privacy

## Data Structure
The data is transferred in the URL hash as base64-encoded JSON with the following structure:

```javascript
{
  "prompt": "user input text from textarea",
  "stack": "Apps" | "Projects", 
  "platform": "Web" | "Mobile" | "Backend" | "Fullstack",
  "frontendFramework": "React JS" | "Angular" | "Vue" | etc.,
  "backendFramework": "FastAPI" | "Django" | "Flask" | "Express.js" | etc.,
  "timestamp": 1234567890123
}
```

URL Format: `https://beta.kavia.ai/#data=eyJwcm9tcHQiOiJ0ZXN0Iiwic3RhY2siOiJBcHBzIn0=`

## Implementation Steps for beta.kavia.ai

### 1. Data Retrieval Function
Create a utility function to retrieve data from hash fragments:

```javascript
// utils/kaviaWebsiteData.js
export const getKaviaWebsiteDataFromHash = () => {
  try {
    // Get hash from current URL
    const hash = window.location.hash;
    
    if (!hash || !hash.includes('#data=')) {
      return {
        success: true,
        data: null,
        hasData: false,
        message: 'No KAVIA website data found in URL hash'
      };
    }
    
    // Extract the data parameter from hash
    const hashParams = new URLSearchParams(hash.substring(1)); // Remove # and parse
    const encodedData = hashParams.get('data');
    
    if (!encodedData) {
      return {
        success: true,
        data: null,
        hasData: false,
        message: 'No data parameter found in hash'
      };
    }
    
    // Decode base64 and parse JSON
    const jsonData = atob(encodedData);
    const userData = JSON.parse(jsonData);
    
    // Validate data structure
    if (userData.prompt !== undefined && userData.stack && userData.platform) {
      return {
        success: true,
        data: userData,
        hasData: true
      };
    } else {
      return {
        success: false,
        data: null,
        hasData: false,
        error: 'Invalid data structure'
      };
    }
    
  } catch (error) {
    console.error('Error retrieving KAVIA website data from hash:', error);
    return {
      success: false,
      data: null,
      hasData: false,
      error: error.message
    };
  }
};

export const clearKaviaWebsiteDataFromHash = () => {
  try {
    // Remove hash from URL
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname + window.location.search);
    }
    return { success: true };
  } catch (error) {
    console.error('Error clearing KAVIA website data from hash:', error);
    return { success: false, error: error.message };
  }
};

// Legacy sessionStorage support (fallback)
export const getKaviaWebsiteData = () => {
  // First try hash method
  const hashResult = getKaviaWebsiteDataFromHash();
  if (hashResult.hasData) {
    return hashResult;
  }
  
  // Fallback to sessionStorage (for same-domain scenarios)
  try {
    const storedData = sessionStorage.getItem('kaviaWebsiteData');
    if (storedData) {
      const userData = JSON.parse(storedData);
      
      if (userData.prompt !== undefined && userData.stack && userData.platform) {
        return {
          success: true,
          data: userData,
          hasData: true
        };
      }
    }
    
    return {
      success: true,
      data: null,
      hasData: false,
      message: 'No KAVIA website data found'
    };
  } catch (error) {
    console.error('Error retrieving KAVIA website data:', error);
    return {
      success: false,
      data: null,
      hasData: false,
      error: error.message
    };
  }
};
```

### 2. React Hook for Data Management
Create a custom hook for easy data access:

```javascript
// hooks/useKaviaWebsiteData.js
import { useState, useEffect } from 'react';
import { getKaviaWebsiteData, clearKaviaWebsiteData } from '../utils/kaviaWebsiteData';

export const useKaviaWebsiteData = () => {
  const [data, setData] = useState(null);
  const [hasData, setHasData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = () => {
    setLoading(true);
    const result = getKaviaWebsiteData();
    
    if (result.success) {
      setData(result.data);
      setHasData(result.hasData);
      setError(null);
    } else {
      setError(result.error);
      setData(null);
      setHasData(false);
    }
    
    setLoading(false);
  };

  const clearData = () => {
    const result = clearKaviaWebsiteData();
    if (result.success) {
      setData(null);
      setHasData(false);
      setError(null);
    }
    return result;
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    data,
    hasData,
    loading,
    error,
    reload: loadData,
    clear: clearData
  };
};
```

### 3. Component Implementation Examples

#### A. Welcome/Onboarding Component
```javascript
// components/WelcomeFromKavia.jsx
import React from 'react';
import { useKaviaWebsiteData } from '../hooks/useKaviaWebsiteData';

const WelcomeFromKavia = () => {
  const { data, hasData, loading, error } = useKaviaWebsiteData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!hasData) return null; // Don't show if no data

  return (
    <div className="welcome-banner">
      <h2>Welcome from KAVIA Website!</h2>
      <p>We see you want to build: <strong>{data.stack}</strong></p>
      <p>Platform: <strong>{data.platform}</strong></p>
      {data.frontendFramework && (
        <p>Frontend: <strong>{data.frontendFramework}</strong></p>
      )}
      {data.backendFramework && (
        <p>Backend: <strong>{data.backendFramework}</strong></p>
      )}
      <div className="user-prompt">
        <h3>Your Project Idea:</h3>
        <p>"{data.prompt}"</p>
      </div>
    </div>
  );
};

export default WelcomeFromKavia;
```

#### B. Pre-filled Project Creation Form
```javascript
// components/ProjectForm.jsx
import React, { useState, useEffect } from 'react';
import { useKaviaWebsiteData } from '../hooks/useKaviaWebsiteData';

const ProjectForm = () => {
  const { data, hasData } = useKaviaWebsiteData();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'web',
    frontend: '',
    backend: ''
  });

  // Pre-fill form with KAVIA website data
  useEffect(() => {
    if (hasData && data) {
      setFormData(prev => ({
        ...prev,
        description: data.prompt || '',
        type: data.platform?.toLowerCase() || 'web',
        frontend: data.frontendFramework || '',
        backend: data.backendFramework || ''
      }));
    }
  }, [hasData, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
    console.log('Creating project with data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {hasData && (
        <div className="prefilled-notice">
          ✨ Form pre-filled with your KAVIA website selections
        </div>
      )}
      
      <input
        type="text"
        placeholder="Project Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      
      <textarea
        placeholder="Project Description"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
      />
      
      <select
        value={formData.type}
        onChange={(e) => setFormData({...formData, type: e.target.value})}
      >
        <option value="web">Web</option>
        <option value="mobile">Mobile</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Fullstack</option>
      </select>
      
      {/* Add more form fields as needed */}
      
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;
```

### 4. Integration Points

#### A. App.js/Layout Integration
```javascript
// App.js or main layout component
import React from 'react';
import { useKaviaWebsiteData } from './hooks/useKaviaWebsiteData';
import WelcomeFromKavia from './components/WelcomeFromKavia';

function App() {
  const { hasData } = useKaviaWebsiteData();

  return (
    <div className="app">
      {hasData && <WelcomeFromKavia />}
      {/* Rest of your app */}
    </div>
  );
}

export default App;
```

#### B. Router Integration
```javascript
// For Next.js or React Router
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useKaviaWebsiteData } from '../hooks/useKaviaWebsiteData';

const useKaviaRedirect = () => {
  const router = useRouter();
  const { hasData, data } = useKaviaWebsiteData();

  useEffect(() => {
    if (hasData && data) {
      // Redirect to appropriate page based on data
      if (data.stack === 'Projects') {
        router.push('/projects/create');
      } else {
        router.push('/apps/create');
      }
    }
  }, [hasData, data, router]);
};
```

### 5. Data Validation and Error Handling

```javascript
// utils/dataValidation.js
export const validateKaviaData = (data) => {
  const errors = [];
  
  if (!data) {
    errors.push('No data provided');
    return { isValid: false, errors };
  }
  
  // Required fields
  if (!data.stack || !['Apps', 'Projects'].includes(data.stack)) {
    errors.push('Invalid or missing stack selection');
  }
  
  if (!data.platform || !['Web', 'Mobile', 'Backend', 'Fullstack'].includes(data.platform)) {
    errors.push('Invalid or missing platform selection');
  }
  
  // Optional but should be strings if present
  if (data.prompt && typeof data.prompt !== 'string') {
    errors.push('Prompt must be a string');
  }
  
  if (data.frontendFramework && typeof data.frontendFramework !== 'string') {
    errors.push('Frontend framework must be a string');
  }
  
  if (data.backendFramework && typeof data.backendFramework !== 'string') {
    errors.push('Backend framework must be a string');
  }
  
  // Timestamp validation
  if (!data.timestamp || !Number.isInteger(data.timestamp)) {
    errors.push('Invalid or missing timestamp');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
```

### 6. Analytics and Tracking

```javascript
// utils/analytics.js
export const trackKaviaWebsiteConversion = (data) => {
  // Track successful data transfer from website to beta app
  if (typeof gtag !== 'undefined') {
    gtag('event', 'kavia_website_conversion', {
      'stack_type': data.stack,
      'platform': data.platform,
      'frontend_framework': data.frontendFramework,
      'backend_framework': data.backendFramework,
      'has_prompt': !!data.prompt
    });
  }
  
  // Other analytics services
  if (typeof mixpanel !== 'undefined') {
    mixpanel.track('KAVIA Website Conversion', {
      stack: data.stack,
      platform: data.platform,
      frontend: data.frontendFramework,
      backend: data.backendFramework,
      prompt_length: data.prompt?.length || 0
    });
  }
};
```

## Testing Strategy

### 1. Manual Testing
- Test data transfer from website to beta app
- Verify data persistence across page refreshes
- Test data clearing functionality

### 2. Automated Testing
```javascript
// __tests__/kaviaWebsiteData.test.js
import { getKaviaWebsiteData, clearKaviaWebsiteData } from '../utils/kaviaWebsiteData';

describe('KAVIA Website Data', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  test('should return no data when sessionStorage is empty', () => {
    const result = getKaviaWebsiteData();
    expect(result.hasData).toBe(false);
  });

  test('should retrieve valid data from sessionStorage', () => {
    const testData = {
      prompt: 'Test prompt',
      stack: 'Apps',
      platform: 'Web',
      frontendFramework: 'React JS',
      backendFramework: '',
      timestamp: Date.now()
    };
    
    sessionStorage.setItem('kaviaWebsiteData', JSON.stringify(testData));
    
    const result = getKaviaWebsiteData();
    expect(result.hasData).toBe(true);
    expect(result.data).toEqual(testData);
  });
});
```

## Security Considerations

1. **Data Sanitization**: Always sanitize user input before displaying
2. **XSS Prevention**: Use proper escaping when rendering user-provided content
3. **Data Validation**: Validate all data before processing
4. **Session Management**: Consider data expiration policies

## Deployment Checklist

- [ ] Implement data retrieval utilities
- [ ] Create React hooks for data management
- [ ] Add welcome/onboarding components
- [ ] Integrate with existing forms
- [ ] Add analytics tracking
- [ ] Implement error handling
- [ ] Add automated tests
- [ ] Test cross-browser compatibility
- [ ] Verify data persistence behavior
- [ ] Document API for team members
