import { redirect } from "react-router-dom"

const SignupAction = async ({request} : {request:Request}) => {
    const formData = await request.formData()

    return redirect('/auth/login')
}

export default SignupAction