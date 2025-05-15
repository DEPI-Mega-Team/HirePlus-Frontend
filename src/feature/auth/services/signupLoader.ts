import useUserData from "@/shared/hooks/useUserData"
import { redirect } from "react-router-dom"

const signupLoader = async () => {
    const user = useUserData()
    if(user){
        return redirect('/login')
    }
    return null
}   

export default signupLoader;