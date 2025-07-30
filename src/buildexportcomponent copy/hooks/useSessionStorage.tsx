"use client";
import { useEffect, useState } from "react";

type SetValue<T> = T | ((val: T) => T);

function useSessionStorage<T>(key: string, initialValue: T): [T, (value: SetValue<T>) => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      // For server-side rendering, return initial value
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      
      return initialValue;
    }
  });

  // useEffect to update session storage when the state changes
  useEffect(() => {
    if (typeof window === "undefined") {
      // For server-side rendering, skip setting sessionStorage
      return;
    }
    try {
      const valueToStore =
        typeof storedValue === "function"
          ? (storedValue as (val: T) => T)(storedValue)
          : storedValue;
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useSessionStorage;
