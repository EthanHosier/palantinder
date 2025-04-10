import UserProfile from "./_components/UserProfile";
import { User } from "../../types";
import Searchbar from "./_components/Searchbar";
import { ActionIcon, rem } from "@mantine/core";
import { IconHeart, IconX } from "@tabler/icons-react";
import { useEffect } from "react";
import { auth, client } from "../../lib/osdk";
import { symbolClientContext } from "@osdk/shared.client2";

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
  useEffect(() => {
   console.log({auth})
   console.log(auth.getTokenOrUndefined()!)
   
   const cc = client[symbolClientContext]
   console.log({cc})
  }, [auth]);

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", marginBottom: 144 }}
    >
      <Searchbar />
      <UserProfile user={exampleUser} />
      <ActionIcon
        variant="filled"
        color="white"
        size={72}
        radius={9999}
        style={{
          position: "fixed",
          bottom: rem(80),
          left: rem(16),
          zIndex: 1000,
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
          padding: rem(16),
        }}
      >
        <IconX size={16} color="black" />
      </ActionIcon>
      <ActionIcon
        variant="filled"
        size={72}
        radius={99999}
        style={{
          position: "fixed",
          bottom: rem(80),
          right: rem(16),
          zIndex: 1000,
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
          padding: rem(16),
        }}
      >
        <IconHeart size={16} color="white" />
      </ActionIcon>
    </div>
  );
};

export default Swipe;
