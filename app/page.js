import Benefits from "./Component/Benefits/Benefits";
import Hero from "./Home.js/Hero";
import WhoAreWe from "./Home.js/WhoAreWe";
import ItemTeam from "./Component/ItemTeam/ItemTeam";
import Items from "./Component/Items/Items";
import Navbar from "./Navbar/page";
import Team from "./Component/Team/Team";
import Why_Us from "./Component/Why_Us/Why_Us";
import My_Profile from "./Component/My_Profile/My_Profile";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <WhoAreWe />
        <Items />
        <Benefits />
        <Team />
        {/* <ItemTeam />
        <Why_Us /> */}
        <My_Profile />
    </div>
  );
}
