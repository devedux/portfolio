import styled from "styled-components";

export default styled.section`
    background: url("/static/images/circle-polygon.svg") no-repeat;
    max-width: 35rem;
    max-height: 39rem;
    height: 100vh;
    width: 100%;
    background-size: 100%;
    margin: auto;
    opacity: 0.2;
    animation: spin 100s linear infinite reverse;
    right: calc(100vh - 60%);
    top: calc(100vh - 45%);
    position: fixed;

    @keyframes spin {
        100% {
            transform: rotate(1turn);
        }
    }

`