import { BackgroundElement, HeadingLogo } from "./components/Logo/Content"

export const Content = () => {

  return (
    <div className="relative overflow-hidden" >
      <div className=" absolute w-full h-fit flex justify-end"><BackgroundElement /></div>
      <div className=" ">

        <div className=" text-right text-hero font-bold text-secondary flex justify-end">
          <span className=" relative left-4" >
            <HeadingLogo />
          </span>
          React
        </div>
        <div className=" text-right text-hero font-bold text-secondary">Conference</div>
      </div>


      <div>

      </div>
    </div>
  )
}