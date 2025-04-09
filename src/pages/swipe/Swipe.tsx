import UserProfile from "./_components/UserProfile";
import { User } from "../../types";
import Searchbar from "./_components/Searchbar";
import { ActionIcon, rem } from "@mantine/core";
import { IconHeart, IconX } from "@tabler/icons-react";

const exampleUser: User = {
  id: "1",
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
    <div
      style={{ position: "relative", minHeight: "100vh", marginBottom: 100 }}
    >
      <Searchbar />
      <UserProfile user={exampleUser} />
      <ActionIcon
        variant="filled"
        color="white"
        size={72}
        radius="xl"
        style={{
          position: "fixed",
          bottom: rem(128),
          left: rem(16),
          zIndex: 1000,
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
          padding: rem(16),
        }}
      >
        <IconX size={rem(16)} color="black" />
      </ActionIcon>
      <ActionIcon
        variant="filled"
        size={72}
        radius="xl"
        style={{
          position: "fixed",
          bottom: rem(128),
          right: rem(16),
          zIndex: 1000,
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
          padding: rem(16),
        }}
      >
        <IconHeart size={rem(16)} color="white" />
      </ActionIcon>
    </div>
  );
};

export default Swipe;
