import {IBaseResponse} from "../../IBaseResponse"
import {IUser} from "../Models/IUser"

export interface IGetUsersResponse extends IBaseResponse {
    user: IUser;
    message: "string",
    success: boolean
}
