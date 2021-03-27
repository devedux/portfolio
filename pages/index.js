import AboutMe from "@/components/home/AboutMe"
import Greeting from "@/components/home/Greeting"
import Layout from "@/components/layout/Layout"
import { BackgroundCurve } from "@/components/UI/Background"
import { CircleBold, CircleMedium } from "@/components/UI/Circle"
import Divider from "@/components/UI/Divider"
import Wrapper from "@/components/UI/Wrapper"

const Index = () => {

  return (
    <Layout>
      <CircleBold />
      <CircleBold 
        sg={"8s"}
        r={"50%"}
        t={"30%"}
      />
      <CircleMedium />
      <CircleMedium sg={"16s"} r={"29.5%"} />
      <Wrapper>
        <Greeting />
      </Wrapper>
      <Divider />
      <BackgroundCurve />
      <Wrapper>
        <AboutMe />
      </Wrapper>
    </Layout>
  )

}

export default Index