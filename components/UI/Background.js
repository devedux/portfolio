import styled from "styled-components";

export default styled.section`
    padding:  3rem 0;
    height: 100%;
    background: #FFF;
    clip-path: polygon(0px 0px, 100% 0px, 100% 92%, 0px 100%);
`

export const BackgroundCurve = styled.section`
    background: url("/static/images/background-polygon.svg") center -20px no-repeat;
    background-size: cover;
    min-height: 55rem;
    z-index: -10;
    position: absolute;
    width: 100%;
`