"use client";
import { FC, useState } from "react";
import OrganizerCards from "./OrganizerCards";
import ScheduleCards from "./ScheduleCards";
import { Sidebar } from "./Sidebar";
import SpeakersCards from "./SpeakersCards";
import SponsorsCards from "./SponsorsCards";

type ConferenceInfoPropsT = {
  conference: {
    organizer: any[],
    speakers: any[],
    schedules: any[],
    sponsors: any[],
  } | undefined;
}
const ConferenceInfo: FC<ConferenceInfoPropsT> = ({ conference }) => {
  type ActiveInfoT = "organizer" | "speakers" | "schedules" | "sponsors";

  const [activeInfo, setActiveInfo] = useState<ActiveInfoT>("organizer")

  const handleClick = (value: ActiveInfoT): void => {
    setActiveInfo(()=>value);
  }
  console.log({ activeInfo })
  return (
    <div className="py-[52px] grid grid-cols-12 gap-12">

      <section className="col-span-4">
        <Sidebar activeInfo={activeInfo} handleClick={handleClick} conference={conference} />
      </section>

      <section className=" col-span-8">
        { activeInfo === "organizer" && <OrganizerCards /> }
        { activeInfo === "speakers" && <SpeakersCards />}
        { activeInfo === "schedules" && <ScheduleCards /> }
        { activeInfo === "sponsors" && <SponsorsCards /> }
      </section>
    </div>
  )
}

export default ConferenceInfo;