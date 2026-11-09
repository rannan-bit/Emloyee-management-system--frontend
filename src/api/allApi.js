import apiService from './apiService'

//get all emp api
export const allEmpAPI = async () => {
    return await apiService("GET", 'all-emp', {})
}
//add emp api
export const addEmpAPI = async (reqBody) => {
    return await apiService("POST", '/add', reqBody)
}
//get single emp api
export const singleEmpAPI = async (id) => {
    return await apiService("GET", `/get-emp/${id}`, {})
}
//edit emp api
export const editEmpAPI = async (id,reqBody) => {
    return await apiService("PUT", `/edit/${id}`, reqBody)
}
//dlt emp api
export const dltEmpAPI = async (id) => {
    return await apiService("DELETE", `/dlt/${id}`,{})
}