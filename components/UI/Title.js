import styled from "styled-components";

export const H2Title = styled.h2`
    font-size: ${({ size }) => size || "4rem" };
    line-height: ${({ lh }) => lh  || "initial" };
    letter-spacing: 0.5px;
    margin: ${({ m }) => m };
    max-width: ${({ maxw }) => maxw || "initial" };
    font-weight: ${({ fw }) => fw || "bold" }
`

export const H3Title = styled.h3`
    font-size: ${({ size }) => size || "2rem" };
    line-height: ${({ lh }) => lh  || "initial" };
    font-weight: ${({ fw }) => fw || "500" };
    margin: ${({ m }) => m };
    letter-spacing: 0.5px;
    display: flex;
    flex-wrap: wrap;
`