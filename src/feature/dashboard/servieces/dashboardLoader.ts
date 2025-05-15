import useUserData from "@/shared/hooks/useUserData";
import { redirect } from "react-router";

const dashboardLoader = () => {

    const user = useUserData();
    if(!user)
    {
        return redirect('/')
    }
    else
    {
        console.log('there is a user in dashboard ' , user);
        
    }

}

export default dashboardLoader;