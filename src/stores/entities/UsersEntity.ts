import {action, computed, observable} from "mobx"
import {IUser} from "../../types/Users/Models/IUser"

export class UsersEntity {
    @observable
    protected _username: String | null = null

    @observable
    protected _displayName: String | null = null

    @observable
    protected _bio: String | null = null


    public constructor(users: IUser) {
        this.setUsername(users.username)
        this.setDisplayName(users.displayName)
        this.setBio(users.bio)
    }

    @action
    private setUsername = (value: string) => {
        this._username = value
    }


    @action
    private setDisplayName = (value: string) => {
        this._displayName = value
    }

    @action
    private setBio = (value: string) => {
        this._bio = value
    }

    @computed
    public get username() {
        return this._username
    }

    @computed
    public get displayName() {
        return this._displayName
    }

    @computed
    public get bio() {
        return this._bio
    }


}
