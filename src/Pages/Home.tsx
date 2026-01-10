import Head from "../Components/Head"
import Top from "../Components/Top"
import Footer from "../Components/Footer"
import Screen from "./../Layouts/Screen"
import Warning from "../Components/Warning"
import QueryShowcase from "../Components/QueryShowcase"
import RegionalBriefings from "../Components/RegionalBriefings"
import CrossRegional from "../Components/CrossRegional"

const Home = () => {
  return (
    <>
      <Warning />
      <Screen>
        <Top />
        <Head />
        <QueryShowcase />
        <hr className="divider-thin my-4" />
        <RegionalBriefings />
        <hr className="divider-thin my-4" />
        <CrossRegional />
        <Footer />
      </Screen>
    </>
  )
}

export default Home
