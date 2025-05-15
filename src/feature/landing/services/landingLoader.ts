import useUserData from "@/shared/hooks/useUserData";
import { redirect } from "react-router";

const landingLoader = () => {
    const user = useUserData();
    if(user)
    {
        return redirect('/dashboard')
    }
    else 
    {
        console.log(user);
        
    }
}

export default landingLoader;
