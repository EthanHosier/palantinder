import React from "react";
import Profile from "./_components/Profile";
import { User } from "../../types";
import Searchbar from "./_components/Searchbar";

const exampleUser: User = {
  name: "John Doe",
  role: "Software Engineer",
  startDate: "2021-01-01",
  location: "San Francisco",
  lead: "Jane Smith",
  slackLink: "https://slack.com/john-doe",
  about:
    "I'm a software engineer with a passion for building scalable and efficient systems.",
  interests: ["React", "Node.js", "Docker"],
  affinityGroups: ["Engineering", "React"],
  imageUrl:
    "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
};

const Swipe = () => {
  return (
    <>
      <Searchbar />
      <Profile user={exampleUser} />
    </>
  );
};

export default Swipe;
