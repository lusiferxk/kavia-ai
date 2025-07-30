"use client";

import React, { createContext } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useSessionStorage from "../hooks/useSessionStorage";

const TopBarContext = createContext();
const TopBarProvider = ({ children }) => {
  const router = useRouter();

  const [tabs, setTabs] = useSessionStorage("tabs", []);

  const addTab = (title, href, projectInfo = {}) => {
    let id = tabs.length + 1;

    // Check if a tab with the same id already exists
    while (tabs.some(tab => tab.id === id)) {
      id += 1; // Increment the id until it's unique
    }

    // Strip query parameters from URL
    const baseUrl = href.split('?')[0];

    // Create tab with project information
    const tab = {
      id,
      title,
      href: baseUrl,
      active: true,
      selected_project_id: projectInfo.selected_project_id || "",
      is_public_selected: projectInfo.is_public_selected || "false",
      selected_tenant_id: projectInfo.selected_tenant_id || "",
      selected_project_creator_email: projectInfo.selected_project_creator_email || ""
    };

    // Deactivate all other tabs
    const updatedTabs = tabs.map(tab => ({ ...tab, active: false }));

    // Add the new tab with the unique id
    setTabs([...updatedTabs, tab]);

    return tabs.length;
  };

  const updateTabTitle = (projectId, newTitle, projectInfo = {}) => {
    const updatedTabs = tabs.map((tab) => {
      // Remove query parameters before extracting project ID
      const baseUrl = tab.href.split("?")[0];
      const currentHrefParts = baseUrl.split("/");
      const currentProjectId = currentHrefParts[2];

      if (String(projectId) === String(currentProjectId)) {
        return {
          ...tab,
          title: newTitle,
          active: true,
          // Preserve existing project info if not provided in update
          selected_project_id: projectInfo.selected_project_id || tab.selected_project_id || String(projectId),
          is_public_selected: projectInfo.is_public_selected !== undefined ? projectInfo.is_public_selected : tab.is_public_selected,
          selected_tenant_id: projectInfo.selected_tenant_id || tab.selected_tenant_id,
          selected_project_creator_email: projectInfo.selected_project_creator_email || tab.selected_project_creator_email
        };
      }

      return { ...tab, active: false }; // Make sure to return a new object for every tab.
    });

    setTabs([...updatedTabs]);  // Ensure new reference is set to trigger a re-render
  };

  const updateTablinkTitle = (projectId, newTitle) => {
    const updatedTabs = tabs.map((tab) => {
      // Remove query parameters before extracting project ID
      const baseUrl = tab.href.split("?")[0];
      const currentHrefParts = baseUrl.split("/");
      const currentProjectId = currentHrefParts[2];

      if (String(projectId) === String(currentProjectId)) {
        return { ...tab, title: newTitle, active: true };
      }

      return { ...tab, active: false }; // Make sure to return a new object for every tab.
    });

    setTabs([...updatedTabs]);  // Ensure new reference is set to trigger a re-render
  };

  const updateBrowseTabHref = (projectId, newPathSegment) => {
    const updatedTabs = tabs.map((tab) => {
      const currentHrefParts = tab.href.split("?");
      const pathSegments = currentHrefParts[0].split("/");
      const currentProjectId = pathSegments[2];

      if (projectId == currentProjectId) {
        // Use only the base URL without query parameters
        const newHref = `${pathSegments.slice(0, 3).join("/")}/${newPathSegment}`;
        return { ...tab, href: newHref };
      }
      return tab;
    });

    setTabs(updatedTabs);
  };

  const updateTabHref = (projectId, newHref) => {
    // Strip query parameters from the new href
    const baseNewHref = newHref.split("?")[0];

    const updatedTabs = tabs.map((tab) => {
      const currentHrefParts = tab.href.split("/");
      const currentProjectId = currentHrefParts[2];

      if (projectId == currentProjectId) {
        return { ...tab, href: baseNewHref };
      }
      return tab;
    });

    setTabs(updatedTabs);
  };

  const updateProjectInfo = (projectId, projectInfo) => {
    const updatedTabs = tabs.map((tab) => {
      // Remove query parameters before extracting project ID
      const baseUrl = tab.href.split('?')[0];
      const currentHrefParts = baseUrl.split("/");
      const currentProjectId = currentHrefParts[2];

      if (String(projectId) === String(currentProjectId)) {
        return {
          ...tab,
          selected_project_id: projectInfo.selected_project_id || tab.selected_project_id,
          is_public_selected: projectInfo.is_public_selected !== undefined ? projectInfo.is_public_selected : tab.is_public_selected,
          selected_tenant_id: projectInfo.selected_tenant_id || tab.selected_tenant_id,
          selected_project_creator_email: projectInfo.selected_project_creator_email || tab.selected_project_creator_email
        };
      }
      return tab;
    });

    setTabs(updatedTabs);
  };

  const removeTab = (id) => {
    let removedTabIndex = null;
    const updatedTabs = tabs.filter((tab, index) => {
      removedTabIndex = index;
      return tab.id != id;
    });


    setTabs(updatedTabs);

    if (updatedTabs.length > 0) {
      const newActiveIndex = Math.max(
        0,
        Math.min(removedTabIndex, updatedTabs.length - 1)
      );
      updatedTabs[newActiveIndex].active = true;
      // Strip query parameters from URL before navigation
      const baseUrl = updatedTabs[newActiveIndex].href.split('?')[0];
      router.push(baseUrl);
    }
    if (updatedTabs.length === 0) {
      router.push("/home");
    }

  };


  const deleteTab = (projectId) => {
    const tabToRemove = tabs.find((tab) => {
      // Remove query parameters before extracting project ID
      const baseUrl = tab.href.split('?')[0];
      const tabProjectId = baseUrl.split('/')[2];
      return tabProjectId === projectId.toString();
    });

    if (tabToRemove) {
      const updatedTabs = tabs.filter((tab) => {
        // Remove query parameters before extracting project ID
        const baseUrl = tab.href.split('?')[0];
        const tabProjectId = baseUrl.split('/')[2];
        return tabProjectId !== projectId.toString();
      });
      setTabs(updatedTabs);
    }
  };


  const setActiveTab = (id) => {
    const idAsNumber = Number(id);
    const updatedTabs = tabs.map((tab) => {
      const isActive = tab.id === idAsNumber;
      return {
        ...tab,
        active: isActive,
      };
    });

    const activeTab = updatedTabs.find((tab) => tab.id === idAsNumber);
    if (activeTab) {
      // Set cookies based on the selected tab's project information
      if (activeTab.selected_project_id) {
        Cookies.set('selected_project_id', activeTab.selected_project_id);
      }
      if (activeTab.is_public_selected !== undefined) {
        Cookies.set('is_public_selected', activeTab.is_public_selected);
      }
      if (activeTab.selected_tenant_id) {
        Cookies.set('selected_tenant_id', activeTab.selected_tenant_id);
      }
      if (activeTab.selected_project_creator_email) {
        Cookies.set('selected_project_creator_email', activeTab.selected_project_creator_email);
      }

      // Strip query parameters from URL before navigation
      const baseUrl = activeTab.href.split('?')[0];
      router.push(baseUrl);
    }
    setTabs(updatedTabs);
  };


  const getActiveTab = () => {
    return tabs.find((tab) => tab.active);
  };
  const setActiveTabIndex = (index) => {
    if (tabs[index]) {
      setActiveTab(tabs[index].id);
    }
  };

  const tabExists = (projectId) => {
    return tabs.some((tab) => {
      // Remove query parameters before extracting project ID
      const baseUrl = tab.href.split('?')[0];
      const currentHrefParts = baseUrl.split("/");
      const currentProjectId = currentHrefParts[2];
      return projectId === currentProjectId;
    });
  };

  const clearTabsFromLocalStorage = () => {
    setTabs([]);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('tabs');
    }
  };

  return (
    <TopBarContext.Provider
      value={{
        tabs,
        addTab,
        removeTab,
        setActiveTab,
        getActiveTab,
        setTabs,
        deleteTab,
        setActiveTabIndex,
        clearTabsFromLocalStorage,
        updateTabHref,
        updateTabTitle,
        updateTablinkTitle,
        tabExists,
        updateBrowseTabHref,
        updateProjectInfo
      }}
    >
      {children}
    </TopBarContext.Provider>
  );
};
export { TopBarProvider, TopBarContext };
