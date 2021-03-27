import styled from "styled-components";

import CardMe from "./CardMe";

const AboutMe = () => {

    return (
        <AboutMeContainer>
            <CardMe />
        </AboutMeContainer>
    )

}

export default AboutMe

const AboutMeContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 45rem;
    z-index: 10;
`