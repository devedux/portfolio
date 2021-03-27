import styled from "styled-components"
import NavBar from "../UI/NavBar"
import NavItem from "../UI/NavItem"
import NavList from "../UI/NavList"
import routes from "@/libs/routes"

const Header = () => {

    return (
        <HeaderStyle>
            <section className="header__container" >
                <NavBar>
                    <NavList 
                        items={routes}
                        renderList={ item => 
                            <NavItem 
                                key={item.desc}
                                desc={item.desc}
                                path={item.path}
                            /> 
                        }
                    />
                </NavBar>
            </section>
        </HeaderStyle>
    )

}

export default Header

const HeaderStyle = styled.header`
    height: 66px;
    position: relative;
    z-index: 100;

    & .header__container {
        padding: 12px 80px;
        width: 100%;
        z-index: 10;        
        position: fixed;
        height: 66px;
    }
`