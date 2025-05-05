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
        return null;
    }

    if(role === "jobseeker"){
        const data = await signupUser({name: userName,email,password,role: "User"})
        console.log("signup user data",data)
        console.log(data.text());
        console.log(data.status);
        console.log(data.headers);
        if(data.ok){
            console.log("signup user successful");
            
            // return redirect('/auth/login')
        }
        
    }
    else if(role === 'company'){
        const data = await signupCompany({companyName,email,password,role: "Company",address})
        console.log("signup company data",data)
        if(data.ok){
            console.log("signup company successful");
            // return redirect('/auth/login')
        }
    }
    return null;
}

export default SignupAction