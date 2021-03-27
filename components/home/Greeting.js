import styled from "styled-components"
import GreetingCard from "./GreetingCard"
import GreetingImage from "./GreetingImage"
import { useRouter } from "next/router"

const Greeting = () => {
    const router = useRouter()

    const PreLoaderPage = _ => {
        router.prefetch("/projects")
    }

    const handleChangeNextPage = _ => {
        router.push("/projects")
    }

    return (
        <GreetingStyle>
            <GreetingCard 
                title={"Welcome to my Portfolio"}
                desc1={"I'm"}
                active={"Cristhian Laurente"}
                desc2={"I'm Frontend Developer"}
                buttonTitle={"Projects"}
                action={handleChangeNextPage}
                onMouseEnter={PreLoaderPage}
            />
            <GreetingImage 

            />
        </GreetingStyle>
    )

}

export default Greeting

const GreetingStyle = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 9rem 0;
`