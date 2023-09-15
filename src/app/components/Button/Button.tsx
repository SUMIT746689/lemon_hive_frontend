import { FC, ReactElement } from "react"

type ButtonWrapper = {
  className?: string;
  handleClick?: () => void;
  children: ReactElement | string;
}
export const ButtonWrapper: FC<ButtonWrapper> = ({ className, handleClick, children }) => {
  return <button className={`bg-primary rounded-[30px] h-fit px-6 py-4 flex justify-center gap-4 ${className}`} onClick={handleClick}>
    {children}
  </button>
}