import { User } from "../types/auth";

const useUserData = () => {
    const user = (localStorage.getItem('user') || sessionStorage.getItem('user') ) 
    console.log('user ',user);
    if (user) {
        return JSON.parse(user) as User
    }
}

export default useUserData;