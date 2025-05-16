import authAPI  from "../api/authAPI";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const LoginAction = async ({request} : {request:Request}) => {

    const formData = await request.formData()
    const email = await formData.get('email') as string
    const password = await formData.get('password') as string

    const { login } = authAPI()

    if(API_BASE_URL){
        const response = await login({ email, password })
        console.log('response: ', response)
        if (response.ok) {
            const data = await response.json()
            return { [data.roles[0]]: data };
        }
        else {
            return { error: 'Login failed' }
        }
    }
    return null;
}
export default LoginAction;