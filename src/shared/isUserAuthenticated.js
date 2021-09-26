import LOCAL_STORAGE_NAMES from "./localStorage"

const isUserAuthenticated = () => {
    const firstName = localStorage.getItem(LOCAL_STORAGE_NAMES.FIRST_NAME)
    const lastName = localStorage.getItem(LOCAL_STORAGE_NAMES.LAST_NAME)
    const age = localStorage.getItem(LOCAL_STORAGE_NAMES.AGE)

    return !!(firstName && lastName && age)
}

export default isUserAuthenticated