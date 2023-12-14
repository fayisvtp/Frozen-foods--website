import instance from "../AxiosInstance"

export function getAllProducts(){
    instance.get('/products')
}