import { useState, useEffect } from 'react';

const STORAGE_KEY = 'userName';

export function useNameLocalStorage(): [string, (name: string) => void] {
    // Initialize state with value from localStorage or empty string
    const [name, setNameState] = useState<string>(() => {
        if (typeof window === 'undefined') return '';
        return localStorage.getItem(STORAGE_KEY) || '';
    });

    // Update localStorage when name changes
    const setName = (newName: string) => {
        setNameState(newName);
        localStorage.setItem(STORAGE_KEY, newName);
    };

    // Listen for storage events (updates from other tabs/windows)
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === STORAGE_KEY) {
                setNameState(event.newValue || '');
            }
        };

        window.addEventListener('storage', handleStorageChange);
        
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return [name, setName];
}
