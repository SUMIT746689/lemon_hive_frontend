import { FC, ReactElement } from "react"
import { Catalog, Circooles, Circooles2, Gofore, Layers, Quotient, Sisyphus2, Sysyphus } from "@/components/Logo/Sponsor"

export default function Sponsor() {
  const iconClasses = "max-h-8 md:max-h-16 mx-auto md:mx-0";
  return (
    <div className=" text-center py-14 md:py-[100px] grid gap-8 bg-gray2">
      <div className=" text-[#0A142F] font-bold text-heading_2"> Our Sponsor </div>

      <SponsorView
        title="🥇 Gold Sponsor"
        sponsors={<>
        {/* width="218" height="66" */}
          <Layers className={iconClasses} />
          {/* width="253" height="72" */}
          <Sysyphus className={iconClasses}/>
          {/* <Sysyphus /> */}
        </>}
      />
      <SponsorView
        title="🥈Silver Sponsors"
        sponsors={<>
          <Circooles className={iconClasses} />
          <Catalog className={iconClasses} />
          <Gofore className={`${iconClasses} max-h-5 object-contain`} />
        </>}
      />
      <SponsorView
        title="🥉Bronze Sponsors"
        sponsors={<>
          <Sisyphus2 className={iconClasses} />
          <Quotient className={iconClasses} />
          <Layers className={iconClasses}/>
          <Circooles2 className={iconClasses} />
        </>}
      />
    </div>
  )
}

const SponsorView: FC<{ title: string, sponsors: ReactElement }> = ({ title, sponsors }) => {

  return (
    <div>
      <div className=" text-heading_6 pb-8">{title}</div>
      <div className=" grid grid-cols-2 sm:flex justify-center align-middle gap-8 md:gap-14 flex-wrap">
        {sponsors}
      </div>
    </div>
  )
}