import { loginBody, signupBodyUser, signupBodyCompany } from "../types/authTypes"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const authAPI = () => {
    const signupUser = async ({name, email, password, role }: signupBodyUser) => {
        const response = await fetch(`${API_BASE_URL}/api/account/register`, {
            method: 'POST',
            body: JSON.stringify({name, email, password, role}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("signup user response",response);
        return response
    }
    const signupCompany = async ({companyName, email, password, role, address}: signupBodyCompany) => {
        const response = await fetch(`${API_BASE_URL}/api/account/register`, {
            method: 'POST',
            body: JSON.stringify({ companyName, email, password, role, address }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("signup company response",response);

        return response
       }

    const login = async ({email, password}: loginBody) => {
        const response = await fetch(`${API_BASE_URL}/api/account/login`, {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("login response",response);

        return response
    }

    return {
        signupUser,
        signupCompany,
        login
    }
}
export default authAPI;