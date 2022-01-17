import {IGetUsersResponse} from "../types/Users/Responses/IGetUserResponse"
import {action, computed, makeAutoObservable, observable} from "mobx"
import {UsersApi} from "../api/UsersApi"
import {UsersEntity} from "./entities/UsersEntity"

export class UsersStore {
    private usersApi = new UsersApi()

    @observable
    private _users: UsersEntity | null = null

    @observable
    protected _message: String | null = null

    @observable
    protected _success: boolean = false


    @action
    private setMessage = (value: string) => {
        this._message = value
    }

    @action
    private setSuccess = (value: boolean) => {
        this._success = value
    }


    @computed
    public get message() {
        return this._message
    }

    @computed
    public get success() {
        return this._success
    }


    public async getUsers(token: string) {
        try {
            const res: IGetUsersResponse = await this.usersApi.getUsers(token)
            this.setMessage(res.message)
            this.setSuccess(res.success)
            this._users = new UsersEntity(res.user)


            return Promise.resolve()

        } catch (error) {

            return Promise.reject(error)
        }
    }

    //TODO: make request for this function inside of api file
    // public async getUserInfo() {
    //
    //

    public constructor() {
        makeAutoObservable(this)
    }


}
