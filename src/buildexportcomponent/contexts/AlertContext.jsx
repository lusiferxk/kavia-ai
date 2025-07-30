"use client";
import { useState, createContext, useContext } from "react";

const AlertContext = createContext({
  alerts: [],
  showAlert: (message, type) => { },
  closeAlert: () => { },
});

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (message, type = "success") => {
    
    setAlerts((prevAlerts) => [
      ...prevAlerts,
      { message, type, id: Date.now() },
    ]);
  };

  const closeAlert = (id) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ alerts, showAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
export { AlertContext };
