import { CardWrapper, ScheduleCardWrapper } from "@/components/Card/Conference";
import { FC, Fragment } from "react";

type SchedulePropsT = {
  datas: any[];
}
type LocationsPropsT = {
  locations: any;
}

const Locations: FC<LocationsPropsT> = ({ locations }) => {
  let descriptions = [];
  for (const [key, value] of Object.entries(locations)) {
    console.log(`${key}: ${value}`);
    descriptions.push(<div><span className="capitalize">{key} : </span>{`${value}`}</div>)
  }
  return (
    <div className=" text-heading_5 grid gap-2" >
      {descriptions}
    </div>
  )
}

const ScheduleCards: FC<SchedulePropsT> = ({ datas }) => {
  console.log({ datas });

  return (
    <div className=" bg-gray2 p-10 rounded-lg grid gap-6">
      {
        datas?.map((data, index) => (
          <Fragment key={index}>
            <ScheduleCardWrapper
              titleLeft={data?.day}
              titleRight={data?.description}
              content={
                data?.location &&
                <Locations locations={data?.location} />
              }
            />
          </Fragment>
        ))
      }
    </div>
  )
}


export default ScheduleCards;