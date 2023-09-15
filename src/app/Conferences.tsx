"use client"
import { FC } from "react";
import useFetch from "../../hooks/useFetch"
import { ConferenceCardMarker } from "./components/Logo/Conference.Card";
import { ConferenceStpperIcon } from "./components/Logo/Conferences";

export const Conferences = () => {
  const url = "https://api.react-finland.fi/graphql?";
  const query = `
  query {
    conferences {
      id
      name
      slogan
      startDate
      endDate      
    }
  }
  `
  const { isLoading, datas, error }: { isLoading: boolean, datas: any, error: null | string } = useFetch({ url, query });
  console.log({ isLoading, datas, error });
  return (
    <div id="conferences" className=" text-center max-w-[1188px] w-full mx-auto">
      <section className=" text-heading_1 pt-16 pb-8 font-bold">Conferences</section>

      <section className=" grid gap-8">
        {(!isLoading && datas?.conferences) && datas.conferences.map((conference: { id: string, name: string, slogan: string }, index: number) => (
          // <div key={conference.id} className=" grid grid-cols-12 gap-4">
          <div key={conference.id} className={`${index % 2 === 0 ? "" : "flex-row-reverse"} flex justify-center gap-8 "`}>
            <div className=" w-full ">
              <ConferenceCard label={conference.name} content={conference.slogan} />
            </div>
            <ConferenceStpperIcon className=" p-2 w-24 h-24" />

            <div className={`${index % 2 === 0 ? "" : " col-start-0 row-end-1 text-right"} col-span-5 text-left w-full`}>
              {Date.now().toLocaleString()}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}




type CardPropsT = {
  label: string;
  content: string
}
const ConferenceCard: FC<CardPropsT> = ({ label, content }) => {
  return (
    <div className=" border-t-4 border-border_color shadow hover:shadow-lg hover: hover:border-primary flex gap-4 p-[10px] duration-150 rounded-lg">
      <section>
        <ConferenceCardMarker />
      </section>
      <section className=" w-fit grid text-left">
        <text className=" text-heading_4 font-medium">{label}</text>
        <text className=" text-heading_6 font-normal">{content}k....</text>
      </section>

    </div>
  )
}