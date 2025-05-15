import useUserData from "@/shared/hooks/useUserData";
import { redirect } from "react-router-dom";
const loginLoader = async () => {
    const user = useUserData()
    if(user){
        return redirect('/dashboard')
    }
    return null
}

export default loginLoader;