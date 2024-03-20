import Benefits from "./Component/Benefits/Benefits";
import Hero from "./Home.js/Hero";
import WhoAreWe from "./Home.js/WhoAreWe";
import Items from "./Component/Items/Items";
import Navbar from "./Navbar/page";
import Team from "./Component/Team/Team";
import My_Profile from "./Component/My_Profile/My_Profile";
import CheckOut1 from "./CheckOut/CheckOut1";
// import ItemTeam from "./Component/ItemTeam/ItemTeam";
// import Why_Us from "./Component/Why_Us/Why_Us";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <WhoAreWe />
        <Items />
        <Benefits />
        <Team />
        <My_Profile />
        <CheckOut1 />
        {/* <ItemTeam />
        <Why_Us /> */}
    </div>
  );
}
