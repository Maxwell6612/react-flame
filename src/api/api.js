import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "89e2f250-2505-4a1c-a90b-397e41b71ddc",
      }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(response => {
      return response.data;
    });
}
}
