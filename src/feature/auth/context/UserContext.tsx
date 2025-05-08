import { createContext, ReactNode, useContext, useState } from "react";
import { AccountType } from "../types/authTypes";
import { User } from "@/shared/types/auth";



export interface UserContextType {
    accountType: AccountType;
    setAccountType: React.Dispatch<React.SetStateAction<AccountType>>;
}

const UserContext = createContext<UserContextType | null>(null);


export const UserProvider = ({children}:{children: ReactNode}) =>{

    const [accountType, setAccountType] = useState<AccountType>('jobseeker');

    return (
        <UserContext.Provider value={{accountType, setAccountType}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = (): UserContextType | null => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};