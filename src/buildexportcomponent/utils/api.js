// utils/api.js
"use client";

import Cookies from "js-cookie";

export const backend_base_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const getHeadersRaw = () => {
  let idToken = Cookies.get("idToken");
  let is_public_selected = Cookies.get("is_public_selected");
  let selected_tenant_id = Cookies.get("selected_tenant_id");
  let selected_project_creator_email = Cookies.get("selected_project_creator_email");

  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${idToken}`,
    "is_public_selected": is_public_selected || "",
    "selected_tenant_id": selected_tenant_id || "",
    "selected_project_creator_email": selected_project_creator_email || ""
  }
}

export const getHeaders = async () => {
  const headers = new Headers(getHeadersRaw());
  return headers;
}

const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export async function extractTextFromFile(projectId, files) {
  const base_url = backend_base_url;
  const url = `${base_url}/file/extract_text?project_id=${projectId}`;

  try {
    // Create FormData
    const formData = new FormData();

    // Handle both single file and array of files
    const fileArray = Array.isArray(files) ? files : [files];

    // Append each file to formData
    fileArray.forEach(file => {
      formData.append('files', file);
      formData.append('type', file.type);
    });

    // Get headers but remove Content-Type as it will be set automatically for FormData
    const headers = await getHeaders();
    headers.delete('Content-Type');

    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Upload failed with status: ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    console.error('Error extracting text from file:', error);
    throw error;
  }
}
