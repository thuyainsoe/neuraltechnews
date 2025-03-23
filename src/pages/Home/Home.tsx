import ThreeRow from "@/components/ThreeRow";
import Channels from "./Channels";
import Hero from "./Hero";
import News from "./News";
import { dummyThree, dummyThree2 } from "@/components/ThreeRow/dummyThree";

const Home = () => {
  return (
    <div>
      <Hero />
      <News />
      <Channels />
      <ThreeRow title="E-Commerce Times" data={dummyThree} />
      <ThreeRow title="LinuxInsider" data={dummyThree2} />
    </div>
  );
};

export default Home;
