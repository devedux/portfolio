import styled from "styled-components"
import Header from "./Header"

const Layout = ({ children }) => {

    return (
        <LayoutStyle>
            <Header />
            <Main>
                { children }
            </Main>
        </LayoutStyle>
    )

}

export default Layout


const LayoutStyle = styled.div`
    height: 100%;
    /* min-height: 100vh; */
    /* min-height: calc(100vh - 66px); */

`

const Main = styled.main`
`