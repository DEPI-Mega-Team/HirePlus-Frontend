import { redirect } from "react-router-dom"
import authAPI from "../api/authAPI"
import { AccountType } from "../types/authTypes";
import { UserContextType, useUser } from "../context/UserContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SignupAction = async ({request} : {request:Request}) => {
    const formData = await request.formData()
    const {signupUser, signupCompany} = authAPI();
    const userName = formData.get('fullname') as string 
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const role = formData.get('role') as AccountType
    const companyName = formData.get('companyName') as string
    const address = formData.get('address') as string
    console.log(userName,email,password,role,companyName,address);
    

    if(!API_BASE_URL){
        console.log("API_BASE_URL is not defined");
        return {error: 'API_BASE_URL is not defined'}
    }

    if(role === "jobseeker"){
        const data = await signupUser({name: userName,email,password,role: "User"})
        console.log("signup user data",data)
        console.log(data.headers.get('Content-Type'));
        let user = null
        if(data.headers.get('Content-Type')?.includes('json')){
            user = await data.json()
        }
        else{
            user = JSON.parse(await data.text()) 
        }
        
        if(data.ok){
            console.log("signup user successful");
            console.log("user",user);
            
            return redirect('/auth/login')
        }
        else{
            console.log("error",user);
            return {error: 'error', task: 'Signup'}
        }
    }
    else{
        const data = await signupCompany({companyName,email,password,role: "Company",address})
        if(data.ok){
            console.log("signup company successful");
            const user = await data.text()
            console.log("user",user);
            return redirect('/auth/login')
        }
        else{
            const error = JSON.parse(await data.text())
            console.log("error",error);
            return {error: 'error', task: 'Signup'}
        }
    }
}

export default SignupAction