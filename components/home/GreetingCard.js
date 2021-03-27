import styled from "styled-components"
import PropTypes from "prop-types"
import { H2Title } from "../UI/Title"
import Button from "../UI/Button"

const GreetingCard = ({ title, desc1, desc2, active , buttonTitle, action, onMouseEnter }) => {
    return (
        <GreetingCardStyle>
            <H2Title lh={"4.875rem"}  maxw={"35rem"} m={"0 0 2rem 0"} >
                {title}
            </H2Title>
            <p>{ desc1 } <strong>{ active }</strong></p>
            <p>{ desc2 }</p>
                <Button 
                    target={"__blank"}
                    m={"2rem 0"}
                    bg={"primary"}
                    onClick={ action }
                    onMouseEnter={onMouseEnter}
                >
                    { buttonTitle }
                </Button>
        </GreetingCardStyle>
    )
}

GreetingCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,    
    onMouseEnter: PropTypes.func.isRequired,    
}

export default GreetingCard

const GreetingCardStyle = styled.article`
    width: 100%;
    max-width: 550px;
    margin: auto;
    & p > strong {
        font-weight: 600;
    }

    & p, & p > strong {
        font-size: 1.5rem;
        line-height: 1.8125rem;        
    }
`