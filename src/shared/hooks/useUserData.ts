const useUserData = () => {
    const user = localStorage.getItem('user') || sessionStorage.getItem('user')
    if (user) {
        return JSON.parse(user)
    }
    return null
}

export default useUserData;