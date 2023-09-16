import ConferenceInfo from "./ConFerenceInfo";
import { getConferenceDatas } from "./fetchDatas";

export default async function Conference(
  { params: { conference_id } }:
    { params: { conference_id: string } }
) {

  const { errors, data } = await getConferenceDatas(conference_id)
  console.log({ errors: errors, data })
  return (
    <div className=" py-[100px] duration-150">
      <div className=" font-bold text-heading_1"> {data?.conference?.name}</div>
      <div className=" text-gray"> {data?.conference?.slogan}</div>

      <ConferenceInfo conference={data?.conference} />

    </div>
  )
} 