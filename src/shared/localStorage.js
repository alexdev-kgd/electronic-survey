export const LOCAL_STORAGE_NAMES = {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    AGE: 'age'
}

export const clearLocalStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE_NAMES.FIRST_NAME)
    localStorage.removeItem(LOCAL_STORAGE_NAMES.LAST_NAME)
    localStorage.removeItem(LOCAL_STORAGE_NAMES.AGE)
}

export const getLocalStorageData = () => {
    return {
        firstName: localStorage.getItem(LOCAL_STORAGE_NAMES.FIRST_NAME),
        lastName: localStorage.getItem(LOCAL_STORAGE_NAMES.LAST_NAME),
        age: localStorage.getItem(LOCAL_STORAGE_NAMES.AGE),
    }
}

export default LOCAL_STORAGE_NAMES