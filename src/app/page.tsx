import { Header } from "@/components/Header/Header";
import { BackgroundElementWrapper } from "./BackgroundElementWrapper";
import { Conferences } from "./Conferences";
import { Content } from "./Content";
import Sponsor from "./Sponsor";

export default function Home() {
  return (
    <main >
      <BackgroundElementWrapper >
        <>
          <Header />
          <Content />
        </>
      </BackgroundElementWrapper>
      <Conferences />
      <Sponsor />
    </main>
  )
}
