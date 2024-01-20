import { AxiosResponse } from 'axios'

interface BasicResponse extends Response {}

export interface GetUserResponse extends BasicResponse {
  loggedIn: boolean
  user: {
    email: string
  }
}

export interface LoginResponse extends BasicResponse {
  error: string
  message: string
}

export interface SignUpResponse extends BasicResponse {
  error: string
  message: string
}

export interface LogoutResponse extends BasicResponse {
  message: string
}

export interface GetNavInfoResponse extends BasicResponse {
  message: string
  error: string | null
  payload: NavInfo[] | null
}

export enum SectionType {
  External = 'external',
  ParentSection = 'parentsection',
  Page = 'page',
}

export interface NavInfo {
  id: string
  label: string
  key: string
  url_segment: string
  type: SectionType
  ext_url: string | null
  children: NavInfo[] | null
}

export interface StandardResponse extends Response {
  message: string
  error: string
  payload: any
}

export type RegisterResponse = SignUpResponse
