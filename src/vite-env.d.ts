/// <reference types="vite/client" />
/* eslint @typescript-eslint/no-explicit-any: 0 */

interface HookFetchOptions {
    method?: string,
    headers?: HeadersInit,
    body?: BodyInit
}

interface ListItem {
    id: number,
    name: string
}

interface DetailUser {
    id: number,
    name: string,
    avatar: string,
    details: Details
}

interface Details {
    city: string,
    company: string,
    position: string
}

interface UseJsonFetchData {
    data: T | T[],
    loading: boolean,
    error: boolean
}

interface HookParam {
    url: string,
    opts?: HookFetchOptions,
    updateOpts?: UpdateOptions
}

interface UpdateOptions {
    update: boolean,
    setUpdate?: React.Dispatch<React.SetStateAction<boolean>>
}

interface Profile {
    id: string,
    login: string,
    name: string,
    avatar: string
}

interface ContextType {
    setNewsList: React.Dispatch<React.SetStateAction<NewsType[] | []>>,
    newsList: NewsType[]
    profile: string | null,
    setProfile: React.Dispatch<React.SetStateAction<string | null>>
    token: string | null,
    setToken: React.Dispatch<React.SetStateAction<string | null>>
}

interface NewsType {
    id: string,
    title: string,
    image: string,
    content: string,
}

interface FormType {
    setProfile: React.Dispatch<React.SetStateAction<string | null>>
    setNewsList: React.Dispatch<React.SetStateAction<NewsType[] | []>>,
}