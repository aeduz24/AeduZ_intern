import Benefits from "./Component/Benefits/Benefits";
import Hero from "./Home.js/Hero";
import WhoAreWe from "./Home.js/WhoAreWe";
import Navbar from "./Navbar/page";
import OurTeam from "./Component/OurTeam/OurTeam";
// import Why_Us from "./Component/Why_Us/Why_Us";
import Items from "./Component/Items/Items";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <WhoAreWe />
        {/* <Why_Us /> */}
        <Items />
        <Benefits />
        <OurTeam />
    </div>
  );
}
