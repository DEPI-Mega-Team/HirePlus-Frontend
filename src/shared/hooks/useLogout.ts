const useLogout = () => {
    const logout = () => {
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
    }
    return logout;
}

export default useLogout;