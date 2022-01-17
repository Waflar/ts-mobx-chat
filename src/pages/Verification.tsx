import * as React from "react"
import {observer} from "mobx-react"
import {FormWrapper, InputFormWrapper, InputWrapper} from "./Registration"
import {AuthStore} from "../stores/AuthStore"
import {VerifyEmailCommand} from "../types/Auth/Requests/VerifyEmailCommand"

export const Verification: React.FunctionComponent = observer(() => {

    const [email, setEmail] = React.useState("")

    const authStore = new AuthStore()
    const userId = localStorage.getItem("userId") || ""

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        authStore.verifyEmail(new VerifyEmailCommand(email, userId))

    }

    return (
        <FormWrapper onSubmit={handleFormSubmit}>
            <InputFormWrapper>
                <label>
                    Please enter your E-MAIL
                    <InputWrapper value={email} type="text" onChange={(event) => setEmail(event.target.value)} />

                </label>
                <input type="submit"/>
            </InputFormWrapper>
        </FormWrapper>
    )
})
