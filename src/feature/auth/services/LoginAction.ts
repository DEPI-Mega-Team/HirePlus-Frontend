import { redirect } from "react-router-dom";
const LoginAction = async ({request} : {request:Request}) => {

    const formData = await request.formData()

    return redirect('/')
    
}
export default LoginAction;