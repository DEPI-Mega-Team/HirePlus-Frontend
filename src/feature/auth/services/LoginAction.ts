import { redirect } from "react-router-dom";
import authAPI  from "../api/authAPI";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const LoginAction = async ({request} : {request:Request}) => {

    const formData = await request.formData()
    const email = await formData.get('email') as string
    const password = await formData.get('password') as string
    const { login } = authAPI()
    console.log(email, password)
    if(!API_BASE_URL){
        console.log('API_BASE_URL is not defined')
        // return redirect('/')
        return {error: 'API_BASE_URL is not defined'}
    }
    const response = await login({email, password})
    console.log(response)
    if(response.ok){
        console.log("login successful");
        const data = await response.json()
        console.log(data);
        
        // return redirect('/')
    }
    else{
        return {error: 'Login failed'}
    }
    
}
export default LoginAction;