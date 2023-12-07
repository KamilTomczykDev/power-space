import { GiMuscleUp } from "react-icons/gi";
import { GiThreeFriends } from "react-icons/gi";
import { GiTrophy } from "react-icons/gi";

import AboutItem from "../../ui/homepage/AboutItem";

function About() {
  return (
    <div className="flex w-full items-center justify-center pt-[100px] md:pt-[200px]">
      <div className="flex max-w-[1500px] flex-col gap-8 sm:flex-row">
        <AboutItem
          icon={<GiMuscleUp size={50} color={"#22c55e"} />}
          title="Get strong"
        >
          With our workout tracker you can easly progress in your powerlifing
          journey.
        </AboutItem>
        <AboutItem
          icon={<GiThreeFriends size={50} color={"#22c55e"} />}
          title="Find friends"
        >
          Follow your friends and look how are they doing.
        </AboutItem>
        <AboutItem
          icon={<GiTrophy size={50} color={"#22c55e"} />}
          title="Participate in events"
        >
          Beat your rivals in leaderboard and win amazing awards!
        </AboutItem>
      </div>
    </div>
  );
}

export default About;
