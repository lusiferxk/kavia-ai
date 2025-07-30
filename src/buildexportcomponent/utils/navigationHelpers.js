/**
 * Utility functions for navigation with organization context
 */

/**
 * Get organization ID from various sources
 * Priority: URL params > localStorage > cookies > tenant_id cookie > default
 */
export const getOrganizationId = () => {
  // Try to get from current URL path
  if (typeof window !== 'undefined') {
    const pathParts = window.location.pathname.split('/');
    if (pathParts.length > 1 && pathParts[1] !== 'project' && pathParts[1] !== 'home' && pathParts[1] !== '') {
      return pathParts[1];
    }
    
    // Try from URL search params
    const urlParams = new URLSearchParams(window.location.search);
    const orgFromParams = urlParams.get('org_id');
    if (orgFromParams) {
      return orgFromParams;
    }
    
    // Try from localStorage
    const orgFromStorage = localStorage.getItem('organization_id');
    if (orgFromStorage) {
      return orgFromStorage;
    }
    
    // Try from cookies - check for tenant_id specifically
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'tenant_id' && value) {
        return value;
      }
    }
    
    // Try organization_id cookie
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'organization_id' && value) {
        return value;
      }
    }
  }
  
  // Default fallback - use 'project' to maintain backwards compatibility
  return 'project';
};

/**
 * Build project URL with organization context
 */
export const buildProjectUrl = (projectId, path = '', type = null, organizationId = null) => {
  let orgId = organizationId || getOrganizationId();
  let projectType = type;
  
  // If we can't determine the org ID or type reliably, try to get it from current URL
  if (typeof window !== 'undefined') {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    
    // Check if we're already on the new URL structure: /orgId/type/projectId/...
    if (pathParts.length >= 4) {
      if (!organizationId && pathParts[1]) {
        orgId = pathParts[1];
      }
      if (!type && pathParts[2]) {
        projectType = pathParts[2];
      }
    }
    
    // Fallback logic for backward compatibility
    if (!orgId || orgId === 'project') {
      if (pathParts.length > 3 && pathParts[2] === 'project') {
        orgId = pathParts[1];
        projectType = 'project'; // backward compatibility
      } else {
        // Use tenant_id from cookies or default to 'default'
        const cookies = document.cookie.split(';');
        let tenantId = null;
        for (let cookie of cookies) {
          const [name, value] = cookie.trim().split('=');
          if (name === 'tenant_id' && value) {
            tenantId = value;
            break;
          }
        }
        orgId = tenantId || 'default';
      }
    }
  }
  
  // Default type if not provided
  if (!projectType) {
    projectType = 'project';
  }
  
  const basePath = `/${orgId}/${projectType}/${projectId}`;
  return path ? `${basePath}/${path.replace(/^\//, '')}` : `${basePath}/overview`;
};

/**
 * Navigate to project route with organization context
 */
export const navigateToProject = (router, projectId, path = '', type = null, organizationId = null) => {
  const url = buildProjectUrl(projectId, path, type, organizationId);
  router.push(url);
};
