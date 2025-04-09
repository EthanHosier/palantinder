import { Stack, Text } from "@mantine/core";
import { User } from "../types";
import UserProfile from "./swipe/_components/UserProfile";

const myUser: User = {
  id: "1",
  name: "Ethan Hosier",
  role: "Delta",
  startDate: "2023-03-15",
  location: "London",
  lead: "Alex Thompson",
  slackLink: "https://slack.com/ethan-hosier",
  about:
    "Full-stack developer focused on creating intuitive user experiences and robust backend systems. Always eager to learn and collaborate on new technologies.",
  interests: ["TypeScript", "Next.js", "Cloud Architecture", "UI/UX Design"],
  affinityGroups: ["Tech", "Full Stack", "Mentorship"],
  imageUrl:
    "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=612x612&w=0&k=20&c=EtRJGnNOFPJ2HniBSLWKzsL9Xf7GHinHd5y2Tx3da0E=",
};

const Profile = () => {
  return (
    <Stack>
      <Text style={{ fontSize: 28, fontWeight: 600 }}>Profile</Text>
      <UserProfile user={myUser} />
    </Stack>
  );
};

export default Profile;
