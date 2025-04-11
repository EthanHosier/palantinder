import { Stack, Text } from "@mantine/core";
import { User } from "../types";
import UserProfile from "./swipe/_components/UserProfile";
import { useGetPersonFromName, useGetSimilarPersonsTo } from "../lib/queries";
import { useNameLocalStorage } from "../lib/useNameLocalStorage";
import MyLoader from "../components/MyLoader";
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
  const [name] = useNameLocalStorage();
  const { data, isLoading, error } = useGetPersonFromName(name);

  const { data: similarPersonsTo, isLoading: similarPersonsToLoading, error: similarPersonsToError } = useGetSimilarPersonsTo(data?.id ?? '');
  console.log({similarPersonsTo})
  console.log({similarPersonsToLoading})
  console.log({similarPersonsToError})

  if (isLoading) {
    return <MyLoader />;
  } 

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data) {
    return <Text>No data</Text>;
  }

  console.log({data})
  console.log({isLoading})
  console.log({error})
  return (
      <Stack mb={48}>
        <Text style={{ fontSize: 28, fontWeight: 600 }}>Profile</Text>
        <UserProfile user={{
          id: data.id,
          name: data.name,
          role: data.role,
          startDate: data.startDate,
          location: data.location,
          lead: data.lead,
          slackLink: data.slackLink ?? '',
          about: data.aboutMe,
          interests: data.interests.split(';'),
          affinityGroups: data.affinityGroups.split(';'),
          imageUrl: data.imageUrl,
        }} />
      </Stack>
  );
};

export default Profile;
