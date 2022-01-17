import axios, {AxiosInstance} from "axios"
import {ApiRoute, UserRoutes} from "../consts/Routes"
import {IGetUsersResponse} from "../types/Users/Responses/IGetUserResponse"

export class UsersApi {

    protected headers: {
        "Content-Type": "application/json"
    } = {
        "Content-Type": "application/json",
    }

    protected apiConnector: AxiosInstance

    public constructor() {
        this.apiConnector = axios.create({headers: this.headers, baseURL: ApiRoute.apiDomain})
    }


    public async getUsers(token: string) {
        try {
            const res: {data: IGetUsersResponse} = await this.apiConnector.get(UserRoutes.getUsers, {headers: `Bearer: ${token}`})
            return Promise.resolve(res.data)
        } catch (error) {
            if (error && error.response) {
                let errorText = ""
                switch (error.response.status) {
                    case 400:
                        errorText = "Bad Request"
                        break
                    case 401:
                        errorText = "Unauthorized"
                        break
                    default:
                        errorText = error.response.status
                        break
                }
                console.log("One of the Error messages from Get Users Request: ", errorText)
            }

            return Promise.reject(error)

        }

    }
}
