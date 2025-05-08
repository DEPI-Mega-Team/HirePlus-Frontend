import { useNavigate } from "react-router";

const useLogout = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        navigate('/auth/login');
    }
    return logout;
}

export default useLogout;