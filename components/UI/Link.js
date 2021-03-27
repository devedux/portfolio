import styled from "styled-components"

export default styled.a`
    line-height: 20px;
    font-weight: ${({ important }) => important ? "600" : "500"};
    color: #FFF;
    &:hover {
        cursor: pointer;
        font-weight: 600
    }
`