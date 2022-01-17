import {action, makeAutoObservable, observable} from "mobx"
import {AuthApi} from "../api/AuthApi"
import {RegisterCommand} from "../types/Auth/Requests/RegisterCommand"
import {LoginCommand} from "../types/Auth/Requests/LoginCommand"
import {VerifyEmailCommand} from "../types/Auth/Requests/VerifyEmailCommand"
import {IBaseResponse} from "../types/IBaseResponse"
import {IRegisterResponse} from "../types/Auth/Responses/IRegisterResponse"
import {DefaultSessionEntity, DefaultSession} from "./entities/SessionEntity"

export class AuthStore {
    private registrationApi = new AuthApi()

    @observable
    private _message: String | null = null

    @observable
    private _success: Boolean = false

    @observable
    private _userId: String | null = null

    @observable
    private _login: String | null = null

    @observable
    private _isLogged: boolean = false

    @observable
    private _session: DefaultSessionEntity | null = null

    @action
    public setMessage = (message: string) => {
        this._message = message
    }

    @action
    public setSuccess = (success: boolean) => {
        this._success = success
    }

    @action
    public setUserId = (userId: string) => {
        this._userId = userId
        localStorage.setItem("userId", userId)
    }

    public async registration(data: RegisterCommand) {
        try {
            const res: IRegisterResponse = await this.registrationApi.register(data)
            this.setMessage(res.message)
            this.setSuccess(res.success)
            this.setUserId(res.userId)
            return Promise.resolve()
        } catch (error) {
            return Promise.reject(error)
        }
    }

    public async verifyEmail(data: VerifyEmailCommand) {
        try {
            const res: IBaseResponse = await this.registrationApi.verifyEmail(data)
            this.setMessage(res.message)
            this.setSuccess(res.success)

            return Promise.resolve()

        } catch (error) {
            return Promise.reject(error)
        }
    }

    public async login(data: LoginCommand) {

        try {
            const session: DefaultSession = await this.registrationApi.login(data)
            this._session = new DefaultSessionEntity(session)
            return Promise.resolve()
        } catch (error) {
            return Promise.reject(error)
        }

    }


    public constructor() {
        makeAutoObservable(this)

    }
}
