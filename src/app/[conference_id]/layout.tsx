

// export const metadata: Metadata = {
//   title: 'React Home',
//   description: 'Generated by create next app',
// }

import { Header } from "@/components/Header/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className=" px-6">
        <div className=" max-w-[1320px] w-full mx-auto ">
          {children}
        </div>
      </div>
    </>
  )
}
