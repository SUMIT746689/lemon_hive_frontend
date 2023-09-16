"use client"
import { FC } from "react";
import { ConferenceStpperIcon } from "@/components/Logo/Conferences";
import { ConferenceCardMarker } from "@/components/Logo/Conference.Card";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";
import { dateFormate } from "@/util/dateFormate";

export const Conferences = () => {
  const url = "https://api.react-finland.fi/graphql?";
  const query = `
  query {
    conferences {
      id
      name
      startDate
      endDate      
      slogan
    }
  }
  `
  const { isLoading, datas, error }: { isLoading: boolean, datas: any, error: null | string } = useFetch({ url, query });
  console.log({ isLoading, datas, error });
  return (
    <div id="conferences" className=" text-center max-w-5xl w-full mx-auto">
      <section className=" text-heading_1 pt-16 pb-8 font-bold">Conferences</section>

      <section className=" grid gap-8 ">
        {(!isLoading && datas?.conferences) && datas.conferences.map((conference: { id: string, name: string, slogan: string, startDate: Date }, index: number) => (
          // <div key={conference.id} className=" grid grid-cols-12 gap-4">
          <Link href={`/${conference.id}`} key={conference.id} className={`${index % 2 === 0 ? "" : "flex-row-reverse"} relative flex justify-center gap-8 "`}>
            <section className=" w-full ">
              <ConferenceCard label={conference.name} content={conference.slogan} />
            </section>

            <section className=" h-full hover:border-primary">
              <ConferenceStpperIcon color={index === 0 ? "#FFC93E" : "#CDCDCD"} bgColor="#F9FAFB" className=" p-2 bg-white w-16 h-16" />
              <div className={`${datas.conferences.length === index + 1 ? "hidden" : ""} ${index === 0 ? 'bg-primary' : 'bg-border_color'} h-full w-[2px] mx-auto  -z-10`} ></div>
            </section>

            <section className={`${index % 2 === 0 ? "text-left" : " text-right "} text-gray text-heading_6 w-full pt-2`}>
              {dateFormate(conference.startDate)}
            </section>
          </Link>
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
    <div className=" border-t-4 border-border_color shadow hover:shadow-lg hover: hover:border-primary flex gap-4 px-[10px] py-6 duration-150 rounded-lg">
      <section className="pt-1">
        <ConferenceCardMarker />
      </section>
      <section className=" w-fit grid text-left">
        <text className=" text-heading_4 font-medium text-secondary">{label}</text>
        <text className=" text-heading_6 font-normal text-gray">{content}</text>
      </section>
    </div>
  )
}