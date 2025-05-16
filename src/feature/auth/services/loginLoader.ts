import useCompanyData from "@/shared/hooks/useCompanyDate";
import useUserData from "@/shared/hooks/useUserData";
import { redirect } from "react-router-dom";
const loginLoader = async () => {
    const user = useUserData()
    const company = useCompanyData()
    if(user){
        return redirect('/dashboard')
    }
    else if(company)
    {
        return redirect('company/dashboard')
    }
    return null
}

export default loginLoader;