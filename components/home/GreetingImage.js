import styled from "styled-components"
import BackgroundCode from "../UI/BackgroundCode"

const GreetingImage = () => {
    return (
        <GreetingImageStyle>
            <BackgroundCode />
        </GreetingImageStyle>
    )
}

export default GreetingImage

const GreetingImageStyle = styled.article`
    width: 100%;
    max-width: 600px;
    margin: auto;
`