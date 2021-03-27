import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects, renderItems }) => {

    if (!projects) return <></>

    return (
        <ProjectListStyle>
            { projects.map(item => renderItems ? renderItems(item) : JSON.stringify(item)) }
        </ProjectListStyle>
    )

}

export default ProjectList

const ProjectListStyle = styled.ul`
    /* border: 1px solid white */
`