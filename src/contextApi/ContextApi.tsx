'use client';

import { createContext, Dispatch, SetStateAction, useContext, useState, ReactNode } from "react";

// Define the data type
type DataType = {
    firstName: string;
}

// Define the context properties type
interface ContextProps {
    user: string;
    setUser: Dispatch<SetStateAction<string>>;
    data: DataType[];
    setData: Dispatch<SetStateAction<DataType[]>>;
    login: (pass: string, email: string) => { res: number };
    signUp: (pass: string, email: string, name: string) => { res: number };
}

// Define the default context values
const GlobalContext = createContext<ContextProps>({
    user: '',
    setUser: () => '',
    data: [],
    setData: () => [],
    login: () => ({ res: 0 }),
    signUp: () => ({ res: 0 })
});

// Provider component
interface GlobalContextProviderProps {
    children: ReactNode; // Define the type for children
}

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const [user, setUser] = useState<string>('');
    const [data, setData] = useState<DataType[]>([]);

    const login = (pass: string, email: string) => {
        const userObj = {
            email,
            pass
        };
        if (userObj.email && userObj.pass) {
            console.log(userObj.email);
            setUser(userObj.email);
            return { res: 200 }; // Example success response
        }
        return { res: 400 }; // Example failure response
    };

    const signUp = (pass: string, email: string, name: string) => {
        const userObj = {
            email,
            pass,
            name
        };
        if (userObj.email && userObj.pass && userObj.name) {
            console.log(userObj.email);
            setUser(userObj.email);
            return { res: 200 }; // Example success response
        }
        return { res: 400 }; // Example failure response
    };

    return (
        <GlobalContext.Provider value={{ user, setUser, data, setData, login, signUp }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Hook to use the global context
export const useGlobalContext = () => useContext(GlobalContext);
