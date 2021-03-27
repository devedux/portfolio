import styled from "styled-components";

export const Hexagono = styled.section`
    border: 1px solid blue;
    height: 4em;
    margin: 3.4641em 0;
    position: relative;
    width: 6.9282em;
    background: #FFF;

    &::before, &::after {
        border-left:3.4641em solid transparent;
        border-right:3.4641em solid transparent;
        height: 0;
        left: 0;
        position: absolute;
        right: 0;
        width: 0;
        content: '';
    }
    &::before {
        border-bottom: 2em solid #FFF;                
        top: -2em;
    }

    &::after {
        border-top: 2em solid #FFF;        
        bottom: -2em;
    }
`