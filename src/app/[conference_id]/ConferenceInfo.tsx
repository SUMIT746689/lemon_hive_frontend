"use client";
import { FC, useState } from "react";
import OrganizerCards from "./OrganizerCards";
import ScheduleCards from "./ScheduleCards";
import { SideBarButtonWrapper, Sidebar } from "./Sidebar";
import SpeakersCards from "./SpeakersCards";
import SponsorsCards from "./SponsorsCards";

type ConferenceInfoPropsT = {
  conference: {
    name: string;
    slogan: string;
    // organizer: any[];
    // speakers: any[];
    schedules: any[];
    // sponsors: any[];
  } | undefined;
}
const ConferenceInfo: FC<ConferenceInfoPropsT> = ({ conference }) => {
  type ActiveInfoT = "organizer" | "speakers" | "schedules" | "sponsors";

  const [activeInfo, setActiveInfo] = useState<ActiveInfoT>("organizer")

  const handleClick = (value: ActiveInfoT): void => {
    setActiveInfo(() => value);
  }

  return (
    <div className=" py-10 sm:py-[52px] ">
      {/* desktop view */}
      <div className=" hidden sm:grid sm:grid-cols-12 gap-8 md:gap-12">
        <section className=" sm:col-span-4">
          <Sidebar activeInfo={activeInfo} handleClick={handleClick} conference={conference} />
        </section>

        <section className=" sm:col-span-8">
          {activeInfo === "organizer" && <OrganizerCards />}
          {activeInfo === "speakers" && <SpeakersCards />}
          {activeInfo === "schedules" && <ScheduleCards datas={conference?.schedules || []} />}
          {activeInfo === "sponsors" && <SponsorsCards />}
        </section>
      </div>

      {/* mobile view */}
      <div className=" sm:hidden grid gap-8">
        <div className="grid gap-4" onClick={() => handleClick("organizer")}>
          <SideBarButtonWrapper isActive={activeInfo === "organizer"}> Organizer</SideBarButtonWrapper>
          {activeInfo === "organizer" && <OrganizerCards />}
        </div>

        <div className="grid gap-4" onClick={() => handleClick("speakers")}>
          <SideBarButtonWrapper isActive={activeInfo === "speakers"}> Speakers</SideBarButtonWrapper>
          {activeInfo === "speakers" && <SpeakersCards />}
        </div>
        <div className="grid gap-4" onClick={() => handleClick("schedules")}>
          <SideBarButtonWrapper isActive={activeInfo === "schedules"}> Schedule</SideBarButtonWrapper>
          {activeInfo === "schedules" && <ScheduleCards datas={conference?.schedules || []} />}
        </div>
        <div className="grid gap-4" onClick={() => handleClick("sponsors")}>
          <SideBarButtonWrapper isActive={activeInfo === "sponsors"}> Sponsors</SideBarButtonWrapper>
          {activeInfo === "sponsors" && <SponsorsCards />}
        </div>
      </div>
    </div>
  )
}

export default ConferenceInfo;