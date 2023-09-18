import DragAndDrop from "@/components/DragAndDrop/DragAndDrop";
import { ConferenceSidebarLogo } from "@/components/Logo/Conference.Sidebar"
import { FC } from "react"

type SidebarPropsT = {
  conference: {
    name: string;
    slogan: string;
    // organizer: any[];
    // speakers: any[];
    schedules: any[];
    // sponsors: any[];
  } | undefined;
  handleClick: (arg: "organizer" | "speakers" | "schedules" | "sponsors") => void;
  activeInfo: string;
}

export const Sidebar: FC<SidebarPropsT> = ({ handleClick, activeInfo }) => {
  console.log({ activeInfo: activeInfo == 'organizer' })
  return (
    <div className=" grid gap-6 sm:gap-8 ">
      <DragAndDrop
        isActive={activeInfo}
        handleClick={handleClick}
        datas={[
          {
            id: "organizer",
            value: <SideBarButtonWrapper isActive={activeInfo === "organizer"}> Organizer</SideBarButtonWrapper>
          },
          {
            id: "speakers",
            value: <SideBarButtonWrapper isActive={activeInfo === "speakers"}> Speakers</SideBarButtonWrapper>
          },
          {
            id: "schedules",
            value: <SideBarButtonWrapper isActive={activeInfo === "schedules"}> Schedule</SideBarButtonWrapper>
          },
          {
            id: "sponsors",
            value: <SideBarButtonWrapper isActive={activeInfo === "sponsors"}> Sponsors</SideBarButtonWrapper>
          },

        ]} />

      {/* <div onClick={() => handleClick("organizer")}>
        <SideBarButtonWrapper isActive={activeInfo === "organizer"}> Organizer</SideBarButtonWrapper>
      </div >
      <div onClick={() => handleClick("speakers")}>
        <SideBarButtonWrapper isActive={activeInfo === "speakers"}> Speakers</SideBarButtonWrapper>
      </div>
      <div onClick={() => handleClick("schedules")}>
        <SideBarButtonWrapper isActive={activeInfo === "schedules"}> Schedule</SideBarButtonWrapper>
      </div>
      <div onClick={() => handleClick("sponsors")}>
        <SideBarButtonWrapper isActive={activeInfo === "sponsors"}> Sponsors</SideBarButtonWrapper>
      </div> */}

    </div >
  )
}

export const SideBarButtonWrapper = ({ children, isActive }: { children: string, isActive: boolean }) => {
  return (
    <div
      style={isActive ? { boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.20)" } : {}}
      className={` ${isActive ? 'bg-primary  text-white' : ' border border-border_color'} rounded-lg cursor-pointer flex items-center p-2 text-center`}
    >
      <ConferenceSidebarLogo />
      <span className="w-full text-heading_4 sm:text-heading_3 font-bold">
        {children}
      </span>
    </div>
  )
}

