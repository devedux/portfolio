import styled from "styled-components";
import Divider from "../UI/Divider";
import ProjectCircle from "../UI/ProjectCircle";
import { H2Title } from "../UI/Title";
import ProjectItem from "./ProjectItem";
import ProjectList from "./ProjectList";

const ProjectMe = (props) => {
    return (
        <ProjectMeStyle>
            <H2Title>Projects</H2Title>   
            <Divider />
            <ProjectList 
                projects={props.projects} 
                renderItems={ item => 
                    <ProjectItem 
                        key={item.title}
                        title={item.title}
                        etiquetas={item.etiquetas}
                        description={item.description}
                        actions={item.actions}
                    />
                }
            />
            <ProjectCircle />         
        </ProjectMeStyle>
    )
}

export default ProjectMe

const ProjectMeStyle = styled.section`
    padding: 6rem 1rem 0 1rem;
`