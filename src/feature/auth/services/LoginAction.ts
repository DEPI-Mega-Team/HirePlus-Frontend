import { redirect } from "react-router-dom";
import authAPI  from "../api/authAPI";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const LoginAction = async ({request} : {request:Request}) => {
    const formData = await request.formData()
    const email = await formData.get('email') as string
    const password = await formData.get('password') as string
    const { login } = authAPI()
    console.log(email, password)
    if(API_BASE_URL){
        const response = await login({ email, password })
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.log("login successful");
            console.log(data);
            return { user: data };
        }
        else {
            return { error: 'Login failed' }
        }
    }
    else 
    {
        const user = {email: "ahmed12@gmail.com", password: "123"}
        return {user}
    }
}
export default LoginAction;