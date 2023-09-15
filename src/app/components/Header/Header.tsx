import Link from "next/link"
import { LogoDark32 } from "../Logo/Logo.Dark"
import { OpenNavLogo } from "../Logo/NavMenu"

export const Header = () => {
  return (
    <div className="">
      <div className="pt-10 flex justify-between max-w-8xl mx-auto">
        <LogoDark32 />

        <div className=" flex text-heading_5 font-medium justify-between text-center w-1/2 pt-1">
          <Link href={"#"}>About us</Link>
          <Link href={"#"}>What We do</Link>
          <Link href={"#"}>Our work</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Say hi</Link>
        </div>

        <div>
          <OpenNavLogo />
        </div>
      </div>
    </div>
  )
}