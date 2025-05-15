import useLogout from "@/shared/hooks/useLogout";
import { redirect } from "react-router";

const logoutLoader = () => {
    const logout = useLogout();
    logout();
    return redirect('/')
}

export default logoutLoader;