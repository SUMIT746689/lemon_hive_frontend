import { FC, ReactElement } from "react";
import { Ornament } from "./components/Logo/Hero.Background";

export const BackgroundElementWrapper: FC<{ children: ReactElement }> = ({ children }) => {

  return (
    <div className=" relative ">
      {/*  */}
      <Ornament className=" absolute top-0 left-0 -z-10" />
      <div
        style={{
          background: 'radial-gradient(circle, rgba(124,62,255,1) 0%, rgba(124,62,255,0) 100%)',
          opacity: 0.1,
          borderRadius: '50%',
        }}
        className=" -z-20 absolute -top-20 -left-20 w-full h-full max-w-[500px] max-h-[500px] bg-gradient-circle from-purple-200 via-[#BE229C] to-purple-200" >
      </div>

      <div
        style={{
          background: 'radial-gradient(#BE229C, #FAFAFA 80%)',
          opacity: 0.1,
          borderRadius: '50%',
        }}
        className=" absolute top-0 right-0 w-full h-full max-w-[412px] max-h-[412px] bg-gradient-circle from-purple-200 via-[#BE229C] to-purple-200" >
      </div>    
          
      <div
        style={{
          background: 'radial-gradient(#BE229C, #FAFAFA 80%)',
          opacity: 1,
          borderRadius: '50%',
        }}
        className=" absolute scale-50  bottom-0 right-20 w-full h-full max-w-[412px] max-h-[412px] bg-gradient-circle from-purple-200 via-[#BE229C] to-purple-200" >
      </div>    
      
      <div
        style={{
          background: 'radial-gradient(#BE229C, #FAFAFA 80%)',
          opacity: 1,
          borderRadius: '50%',
        }}
        className=" absolute scale-50  bottom-0 left-20 w-full h-full max-w-[412px] max-h-[412px] bg-gradient-circle from-purple-200 via-[#BE229C] to-purple-200" >
      </div>    
          
          

      {children}
    </div>
  )
}
