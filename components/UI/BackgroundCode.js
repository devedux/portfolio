import styled from "styled-components";

const BackgroundCode = () => {
    return (
        <Background>
            <section>
                <code className="red" >function</code> <code className="blue" >Component</code> <code className="white" >()</code> <code className="white" >{"{"}</code> <br/>
                <code className="red  space" > {"   "} return</code> <code className="dots" > ...|</code>
                <br/>
                <code className="white" >{"}"}</code>
            </section>
        </Background>
    )
}

export default BackgroundCode

const Background = styled.section`
    background: linear-gradient(0deg, #2A2A2B, #2A2A2B), linear-gradient(187.86deg, #3A3A3A -36.49%, #19191A 119.41%);
    width: 16.240625rem;
    padding: 2rem 0;
    /* height: 6.576875rem; */
    border-radius: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    & .blue {
        color: #5F9FFF;
    }

    & .red {
        color: #FF7D7D;
    }

    & .dots {
        color: #BCBCBC
    }

    & .space::before {
        content: "--";
        color: transparent
    }

    & .red, & .blue, & .dots, & .white {
        font-size: 16px;
        line-height: 26px;
        font-family: Fira Code;
        font-style: normal;
        font-weight: bold;
    }
`