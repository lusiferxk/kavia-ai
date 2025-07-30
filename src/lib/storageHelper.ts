import "client-only";

type StorageValue = string | number | boolean | object | null;

export function getLocalStorage<T extends StorageValue>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') {
        return defaultValue;
    }

    const stickyValue = localStorage.getItem(key);

    if (stickyValue === null) {
        return defaultValue;
    }

    try {
        return JSON.parse(stickyValue) as T;
    } catch {
        // If parsing fails, return the default value
        return defaultValue;
    }
}

export function setLocalStorage(key: string, value: StorageValue): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
}