import * as React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Registration} from "../../pages/Registration"
import {Main} from "../../pages/Main"
import {Verification} from "../../pages/Verification"
import {LoginForm} from "../LoginForm/LoginForm"

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/verification" component={Verification} />
                    <Route exact path="/login-test" component={LoginForm} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
