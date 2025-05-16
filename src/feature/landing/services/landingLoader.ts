import useCompanyData from "@/shared/hooks/useCompanyDate";
import useUserData from "@/shared/hooks/useUserData";
import { redirect } from "react-router";

const landingLoader = () => {
    const user = useUserData();
    const company = useCompanyData();
    if(user)
    {
        return redirect('/dashboard')
    }
    else if(company)
    {
        return redirect ('/company/dashboard')       
    }
}

export default landingLoader;
