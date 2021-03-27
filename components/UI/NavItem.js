import PropTypes from "prop-types"
import styled from "styled-components"
import NextLink from "next/link"
import Link from "./Link"
import { useRouter } from "next/router"


const NavItem = ({ desc, path }) => {
    const router = useRouter()
    return (
        <Item>
            <NextLink href={path} as={path} passHref >  
                    <Link important={router.pathname === path} >
                        { desc }
                        { router.pathname === path && <ImportantStyle /> }    
                    </Link>
            </NextLink>
        </Item>
    )
}

NavItem.propTypes = {
    desc: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}

export default NavItem

const Item = styled.li`
    padding-right: 8px; 
    width: 100px;
    position: relative;
`

const ImportantStyle = styled.div`
    width: 10px;
    height: 10px;
    background: #005FF9;
    position: absolute;
    border-radius: 50%;
    top: calc(50% - 10px);
    left: -15px;
    box-shadow: rgb(138 198 255) 0px 0px 12px 3px;
    animation: 0.5s cubic-bezier(0.54, 0.04, 0.44, 1.01) 0s infinite alternate none running;    
`