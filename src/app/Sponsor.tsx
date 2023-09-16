import { FC, ReactElement } from "react"
import { Catalog, Circooles, Circooles2, Gofore, Layers, Quotient, Sisyphus2, Sysyphus } from "@/components/Logo/Sponsor"

export default function Sponsor() {

  return (
    <div className=" text-center py-[100px] grid gap-8">
      <div className=" text-[#0A142F] font-bold text-heading_2"> Our Sponsor </div>

      <SponsorView
        title="🥇 Gold Sponsor"
        sponsors={<>
          <div className=" max-h-8 object-cover"><Layers /></div>
          <div className=" max-h-8 object-cover"><Sysyphus/></div>
          {/* <Sysyphus /> */}
        </>}
      />
      <SponsorView
        title="🥈Silver Sponsors"
        sponsors={<>
          <Circooles />
          <Catalog />
          <Gofore />
        </>}
      />
      <SponsorView
        title="🥉Bronze Sponsors"
        sponsors={<>
          <Sisyphus2 />
          <Quotient />
          <Layers />
          <Circooles2 />
        </>}
      />
    </div>
  )
}

const SponsorView: FC<{ title: string, sponsors: ReactElement }> = ({ title, sponsors }) => {

  return (
    <div>
      <div className=" text-heading_6 pb-8">{title}</div>
      <div className=" grid grid-cols-2 sm:flex justify-center gap-14 flex-wrap">
        {sponsors}
      </div>
    </div>
  )
}