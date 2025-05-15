import useUserData from "@/shared/hooks/useUserData";
import { User } from "@/shared/types/auth";

const LoginDetails = () => {
    const user = useUserData() as User
    return (
        <div>
            <div>
                <h1>Basic Information</h1>
                <p>This is login information that you can update anytime.</p>
            </div>
            <div>
                <h1>Update Email</h1>
                <p>Update your email address to make sure it is safe</p>
                <p>{user.email}</p>
                <p>your email address is verified</p>

                <label htmlFor="">update email</label>
                <input type="text" name="" id="" />

                <button type="submit">Update Email</button>
            </div>
            <div>
                <h1>New Password</h1>
                <p>Manage your password to make sure it is safe</p>

                <label htmlFor="">Old Password</label>
                <input type="password" name="" id="" />
                <label htmlFor="">New Password</label>
                <input type="password" name="" id="" />

                <button type="submit">Change Password</button>
            </div>

        </div>
    )
}

export default LoginDetails;