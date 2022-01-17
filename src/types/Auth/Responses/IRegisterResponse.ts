import {IBaseResponse} from "../../IBaseResponse"

export interface IRegisterResponse extends IBaseResponse{
    userId: string;
    accessToken: string;
    refreshTokenId: string;
}
