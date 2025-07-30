"use client"
import React, { useState } from "react"
import { createContext, useContext, useEffect } from "react"
import Cookies from 'js-cookie';

const UserContext = createContext();

export class User {
    constructor() {
        this.user = {};
        this.user_id = Cookies.get("userId") || null;
        this.tenant_id = Cookies.get("tenant_id") || null;
        this.username = Cookies.get("username") || "";
        this.is_admin = false;
        this.is_free_user = true;
        this.is_super_admin = false;
        this.email = "";
        this.name = "";
        this.designation = "";
        this.department = "";
        this.picture = "";
    }
}

export const UserProvider = ({ children }) => {
    const [user_id, setUserId] = useState(Cookies.get("userId"));
    const [tenant_id, setTenantId] = useState(Cookies.get("tenant_id"));
    const [username] = useState(Cookies.get("username"));
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [department, setDepartment] = useState("");
    const [picture, setPicture] = useState("");
    const [is_admin, setIsAdmin] = useState(null);
    const [is_free_user, setIsFreeUser] = useState(null);
    const [is_super_admin, setIsSuperAdmin] = useState(null);
    const [has_accepted_terms, setHasAcceptedTerms] = useState(null);
    const [isPlanName,setIsPlanName] = useState(null)

    const fetchUserData = async () => {
        try {
            // Mock user data for the exported component
            setTenantId("default");
            setIsAdmin(false);
            setIsFreeUser(true);
            setIsSuperAdmin(false);
            setEmail("user@example.com");
            setName("Demo User");
            setDesignation("Developer");
            setDepartment("Engineering");
            setPicture("");
            setUserId("demo-user-id");
            setHasAcceptedTerms(true);
            setIsPlanName("Free Plan");
        } catch (error) {
            console.error("Error in fetchUserData:", error);
        }
    };

    const is_having_permission = () => {
        return true; // Always allow for demo
    };
    
    const is_public_project_selected = (creator_email) => {        
        return false; // Always private for demo
    };

    useEffect(() => {
        fetchUserData();
    }, [user_id]);

    return (
        <UserContext.Provider value={{
            user_id,
            tenant_id,
            username,
            email,
            name,
            designation,
            department,
            picture,
            is_admin,
            is_free_user,
            is_super_admin,
            has_accepted_terms,
            isPlanName,
            is_having_permission,
            is_public_project_selected,
            fetchUserData
        }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
