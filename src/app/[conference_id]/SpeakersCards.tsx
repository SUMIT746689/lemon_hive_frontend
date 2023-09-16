import { CardWrapper } from "@/components/Card/Conference";

const SpeakersCards = () => {
  return (
    <div className=" bg-gray2 p-10 rounded-lg grid gap-6">
      <CardWrapper imageUrl="/speakers/ronald_richards.png" title="Ronald Richards" content="Lorem ipsum dolor sit amet, con sec tetur ad." />
      <CardWrapper imageUrl="/speakers/jenny_wilson.png" title="Jenny Wilson" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut." />
      <CardWrapper imageUrl="/speakers/cameron_williamson.png" title="Cameron Williamson" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut." />
    </div>
  )
}


export default SpeakersCards;