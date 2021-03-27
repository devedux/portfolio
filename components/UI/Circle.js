import styled from "styled-components";

export const CircleBold = styled.span`
    background: url("/static/images/circle-bold.svg") no-repeat;
    width: 4rem;
    height: 4rem;
    display: inline-flex;
    position: fixed;
    animation: slice ${({ sg }) => sg || "10s" } infinite;
    right: ${({ r }) => r || "30%"};
    top: ${({ t }) => t || "20%"};
    @keyframes slice {
        0% {
            transform: translate(-15rem, -16rem)
        }
        100% {
            transform: translate(0);
            opacity: 0;
        }
    }
`
export const CircleMedium = styled.span`
    background: url("/static/images/circle-medium.svg") no-repeat;
    width: 4rem;
    height: 4rem;
    display: inline-flex;
    position: fixed;
    animation: slice500 ${({ sg }) => sg || "15s" } infinite;
    right: ${({ r }) => r || "30%"};
    top: ${({ t }) => t || "22%"};
    @keyframes slice500 {
        0% {
            transform: translate(15rem, 6rem)
        }
        100% {
            transform: translate(0);
            opacity: 0;
        }
    }
`


