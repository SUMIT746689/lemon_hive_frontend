import { LogoDark32 } from "../Logo/Logo.Dark"
import { OpenNavLogo } from "../Logo/NavMenu"

export const Header = () => {
  return (
    <div className="pt-10 flex justify-between max-w-8xl mx-auto">
      <LogoDark32 />

      <div className=" flex border justify-between text-center w-1/2 ">
        <div>About us</div>
        <div>What We do</div>
        <div>Our work</div>
        <div>Blog</div>
        <div>Say hi</div>
      </div>

      <div>
        <OpenNavLogo />
      </div>
    </div>
  )
}