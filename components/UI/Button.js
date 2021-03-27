import styled from "styled-components"

export default styled.button`
    border: none;
    margin: ${({ m }) => m};
    background: ${({ bg }) => bg === "primary" ? "#0450CB" : "#2A2A2B"};
    border-radius: 16px;
    /* height: 51.5px; */
    /* width: 187.63px; */
    padding: ${({ p }) => p || ".5rem 2.5rem"};
    color: #FFF;
    font-weight: bold;
    font-size: ${({ size }) => size || "24px"};
    line-height: 29px;
    cursor: pointer
`