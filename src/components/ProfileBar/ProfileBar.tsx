import * as React from "react"
import styled from "styled-components"
// import {UsersStore} from "../../stores/UsersStore"

export const Navbar = () => {
    // const usersStore = new UsersStore()

    const [registerPopupVisible, setRegisterPopupVisible] = React.useState(false)

    // console.log(usersStore.getUsers())

    const handleLoginButtonClick = () => {
        setRegisterPopupVisible(true)
    }

    return <Container></Container>
}

const Container = styled("div")`
    display: flex;
    flex-direction: column;
`

/*const LoginWrapper = styled("div")`
    display: flex;
    justify-content: center;
`
*/


