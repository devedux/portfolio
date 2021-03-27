import styled from "styled-components";
import Button from "../UI/Button";
import { H3Title } from "../UI/Title";
import { useRouter } from "next/router";
import NextLink from "next/link"

const ProjectItem = (props) => {
    const router = useRouter()
    const onAction = path => {
        router.push(path)
    }

    return (
        <ProjectItemStyle>           
            <ProjectDescription>
                <H3Title fw={"700"} size={"2.5rem"} >
                    {props.title}
                </H3Title>
                {props.etiquetas.map(tag =>
                    <Etiqueta key={tag} >{tag}</Etiqueta>
                )}
                <p>{props.description}</p>
                {props.actions.map(act => 
                    <NextLink href={act.path} passHref >
                        <Link 
                            key={act.description}
                            size={"1rem"} 
                            p={".2rem 1.5rem"}
                            m={"1rem"}
                            bg={act?.bg}
                            target={"__blank"}
                            // onClick={_ => onAction(act.path)}
                            >
                            {act.description}
                        </Link>                
                    </NextLink>
                )}                
            </ProjectDescription>
        </ProjectItemStyle>
    )

}

export default ProjectItem

const ProjectItemStyle = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 3rem 0;
`

const Etiqueta = styled.span`
    padding: .2rem 1rem;
    background: #5F9FFF;
    color: #FFF;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    border-radius: 12px;    
    margin: .2rem;
`

const ProjectDescription = styled.section`
    & p {
        margin: 1rem 0 0 0;
        font-size: 1rem;
    }
`

export const Link = styled.a`
    border: none;
    margin: ${({ m }) => m};
    background: ${({ bg }) => bg === "primary" ? "#0450CB" : "#2A2A2B"};
    border-radius: 16px;
    display: inline-block;
    padding: ${({ p }) => p || ".5rem 2.5rem"};
    color: #FFF;
    font-weight: bold;
    font-size: ${({ size }) => size || "24px"};
    line-height: 29px;
    cursor: pointer;
    transition: 500ms;
    &:hover {
        box-shadow: 4px 5px 5px ${({ bg }) => (bg && bg === "primary") ? "#2A2A2B" : "#0450CB" };
    }
`

