import axios from "axios";
import { UserType } from "../types/types";
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "89e2f250-2505-4a1c-a90b-397e41b71ddc",
      }
})

export enum ResultCodesEnum {
  Success = 0, 
  Error = 1,
}

export enum ResultCodesForCaptchaEnum {
  CaptchaIsRequired = 10
}

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null 
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}