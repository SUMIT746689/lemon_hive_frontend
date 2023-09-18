"use client";
import { FC, useState } from "react";
import OrganizerCards from "./OrganizerCards";
import ScheduleCards from "./ScheduleCards";
import { Sidebar } from "./Sidebar";
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
    <div className=" py-10 sm:py-[52px] grid sm:grid-cols-12 gap-8 md:gap-12">

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
  )
}

export default ConferenceInfo;