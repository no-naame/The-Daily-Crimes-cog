import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ReactNode, useEffect } from "react"

type Props = {
  children: ReactNode
}

const Screen: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      document.body.style.overflow = "auto"
    }, 4000)
    return () => {
      document.body.style.overflow = "auto"
      clearTimeout(timer)
    }
  }, [])

  const timeline = gsap.timeline({
    delay: 0.5,
  })

  useGSAP(() => {
    // Initial state - document appears "classified"
    timeline.fromTo(
      "#screen",
      {
        scale: 0.5,
        opacity: 0.3,
        filter: "blur(10px)",
        y: document.documentElement.scrollHeight * 0,
      },
      {
        scale: 0.5,
        opacity: 0.7,
        filter: "blur(5px)",
        y: () => -document.documentElement.scrollHeight * 0.2,
        duration: 0.8,
        ease: "power2.out",
      }
    )

    // "Declassification" reveal
    timeline.to("#screen", {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 2,
      rotation: -360,
      ease: "power3.inOut",
    })

    // Subtle final settle
    timeline.to("#screen", {
      y: 0,
      duration: 0.3,
      ease: "power1.out",
    })
  }, [])

  return (
    <div id="screen" className="screen">
      {children}
    </div>
  )
}

export default Screen
