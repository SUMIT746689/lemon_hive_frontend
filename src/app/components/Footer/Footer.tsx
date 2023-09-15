import Link from "next/link"
import { LogoLight32, LogoLight48 } from "../Logo/Logo.Light"
import { Browser, Facebook, LinkedIn, Twitter } from "../Logo/Social"

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center align-middle w-full  h-[336px] bg-secondary text-[#FFFFFF] gap-4">

      <div className=" pb-10">
        <div className="hidden sm:block"><LogoLight48 /></div>
        <div className=" sm:hidden"><LogoLight32 /></div>
      </div>

      <div className="h-6 gap-8 flex justify-center pb-8">
        <Link href={"#"}><Twitter /></Link>
        <Link href={"#"}><LinkedIn /></Link>
        <Link href={"#"}><Facebook /></Link>
        <Link href={"#"}><Browser /></Link>
      </div>

      <div className=" text-heading_6">© 2023 Lemonhive. All rights reserved.</div>
    </div>
  )
}