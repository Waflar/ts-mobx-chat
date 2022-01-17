import {action, computed, observable} from "mobx"

export interface DefaultSession {
    refreshTokenId: string | null
    accessToken: string | null
}

export class DefaultSessionEntity {
    @observable
    protected _refreshTokenId: string | null = null

    @observable
    protected _accessToken: string | null = null

    @action
    private setAccessToken = (value: string | null) => {
        this._accessToken = value
    }

    @action
    private setRefreshToken = (value: string | null) => {
        this._refreshTokenId = value
    }


    public constructor(session: DefaultSession) {
        this.setAccessToken(session.accessToken)
        this.setRefreshToken(session.refreshTokenId)
    }

    @computed
    public get accessToken() {
        return this._accessToken
    }

    @computed
    public get refreshToken() {
        return this._refreshTokenId
    }


}
