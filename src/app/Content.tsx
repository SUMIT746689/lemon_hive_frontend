import Image from "next/image"
import { BackgroundElement, ButtonIcon, HeadingLogo, HeroStarLogo, ScrollDownLogo, SideImageLogo } from "./components/Logo/Content"
import { ButtonWrapper } from "./components/Button/Button"
import Link from "next/link"

export const Content = () => {

  return (
    <div className="relative grid grid-cols-6 gap-8 mt-32 max-w-[1500px] mx-auto" >

      <div className="absolute w-full h-fit flex justify-end -z-10"><BackgroundElement /></div>

      <section className=" col-span-4 leading-none">
        <section className=" text-right text-hero font-bold text-secondary flex justify-end">
          <span className=" relative -top-8 left-4" >
            <HeadingLogo />
          </span>
          React
        </section>

        <section className=" text-right text-hero font-bold text-secondary">Conference</section>

        <section className=" flex pt-20">
          <div className=" relative w-2/6 ">
            <Image className=" w-fit pb-16 pr-16" src={"/content/side_image.png"} alt="side_image" width={500} height={300} />
            <SideImageLogo className="absolute right-0 -bottom-0 -z-10 " />
          </div>
          <div className="w-4/6 grid ">
            <text className=" text-heading_4">Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.</text>
            <ButtonWrapper className=" w-1/2" >
              <>
                <span>Buy Tickets</span>
                <ButtonIcon className="pt-1" />
              </>
            </ButtonWrapper>
          </div>
        </ section>
      </section>

      <section className=" col-span-2 flex items-center relative">
        <Image className=" w-full h-fit " src={"/content/hero_image.png"} alt="hero Image" width={600} height={600} />
        <HeroStarLogo className=" z-10 absolute bottom-16 -left-12" />
      </section>

      <Link href="#conferences" className=" cursor-pointer" >
        <section className=" absolute left-1/2 bottom-20 flex -rotate-90 text-heading_6">
          <ScrollDownLogo className="rotate-90 mt-1 pt-1 " /> scroll down
        </section>
      </Link>
    </div>
  )
}