import Image from "next/image";
import { FC, ReactNode } from "react";

type CardWrapperT = {
  imageUrl: string;
  title: string;
  content: string;
  icons?: ReactNode;
}

export const CardWrapper: FC<CardWrapperT> = ({ imageUrl, title, content, icons }) => {

  return (
    <div className=" flex gap-10 bg-white rounded-lg">
      <Image src={imageUrl} alt={title} width={140} height={140} className=" p-4" />
      <section className=" flex flex-col justify-center gap-1 pr-5">
        <section>
          <div className=" text-secondary text-heading_3 font-bold"> {title}</div>
          {icons}
        </section>
        <section className=" text-heading_5 text-gray"> {content}</section>
      </section>
    </div>
  )
}