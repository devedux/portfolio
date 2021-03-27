import styled from "styled-components";
import Button from "../UI/Button";
import { H2Title, H3Title } from "../UI/Title";
import { Link } from "@/components/projects/ProjectItem"
import NextLink from "next/link"

const CardMe = () => {
    return (
        <CardMeContainer>
            <H2Title size={"3rem"} >Cristhian E. Laurente López</H2Title>
            <H3Title m={"0 0 1rem 0"} >I'm Frontend Developer</H3Title>
            <p>Hello, my name is cristhian but my friends call me devedux. I’m twenty one years old and I speak spanish and I learning English. I love very learn and work as a team.</p>
            <NextLink 
                href={"https://www.linkedin.com/in/cristhian-laurente-016a88207/"} 
                passHref
            >
                <Link 
                    m={"2rem 0 0 0"} 
                    target={"__blank"}
                    >
                        Contact me
                </Link>
            </NextLink>
        </CardMeContainer>
    )
}

export default CardMe

const CardMeContainer = styled.article`
    background: #1B1B1C;
    border-radius: 30px;
    min-width: 320px;
    max-width: 565.68px;
    padding: 2rem;
    /* margin: auto; */
    width: 100%;

    & p {
        font-weight: 400;
        font-size: 1.3rem;
    }
    
`
