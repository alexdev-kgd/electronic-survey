const isUserAuthenticated = () => {
    const firstName = localStorage.getItem('FirstName')
    const lastName = localStorage.getItem('LastName')
    const age = localStorage.getItem('Age')

    return !!(firstName && lastName && age)
}

export default isUserAuthenticated