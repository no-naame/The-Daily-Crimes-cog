import { useState } from "react"
import { IoDesktop } from "react-icons/io5"

const Warning = () => {
  const [vis, setVis] = useState(true)
  return (
    <>
      {vis && (
        <section className="md:hidden fixed top-10 z-50 w-full px-4">
          <div className="flex flex-col items-center gap-4 bg-dark-bg/95 backdrop-blur-sm text-dark-text p-6 font-Helvetica mx-auto border rounded-xl border-cognivue-blue/30 shadow-2xl max-w-sm">
            <IoDesktop className="text-4xl text-cognivue-blue-light" />
            <p className="text-sm text-center leading-relaxed">
              <strong className="text-cognivue-blue-light">Cognivue</strong> is
              optimized for desktop viewing. The intelligence briefing layout
              works best on larger screens.
            </p>
            <button
              onClick={() => setVis((prev) => !prev)}
              className="text-sm font-medium border border-cognivue-blue px-4 py-2 rounded-md hover:bg-cognivue-blue hover:text-white transition-colors duration-300"
            >
              Continue Anyway
            </button>
          </div>
        </section>
      )}
    </>
  )
}

export default Warning
