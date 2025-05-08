import useUserData from "@/shared/hooks/useUserData";
import { redirect } from "react-router-dom";
const loginLoader = async () => {
    const user = useUserData()
    if(user){
        return redirect('/')
    }
    return null
}

export default loginLoader;