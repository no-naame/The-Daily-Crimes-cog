import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Screen: React.FC<Props> = ({ children }) => {
  return (
    <div className="screen animate-fade-in">
      {children}
    </div>
  )
}

export default Screen
