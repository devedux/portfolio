import PropTypes from "prop-types"
import styled from "styled-components"

const NavList = ({ renderList, items }) => {

    if (!items && !Array.isArray(items) && items.length === 0) return <>Hubo un error al cargar los items del Navbar</>

    return (
        <NavLisStyle>
            {items.map( item => renderList ? renderList(item) : item)}
        </NavLisStyle>
    )
}

NavList.propTypes = {
    renderList: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
        desc: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    }))    
}

export default NavList

const NavLisStyle = styled.ul`
    display: flex;
    justify-content: flex-end;
`