import UserProfile from "./_components/UserProfile";
import { User } from "../../types";
import Searchbar from "./_components/Searchbar";
import { ActionIcon, rem, Text, Container } from "@mantine/core";
import { IconHeart, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useGetPersonFromName, useGetSimilarPersonsTo, handleSwipe } from "../../lib/queries";
import { queryClient } from "../../lib/utils";
import { useNameLocalStorage } from "../../lib/useNameLocalStorage";
import MyLoader from "../../components/MyLoader";
const Swipe = () => {
  const [index, setIndex] = useState(0);
  const [swipeLoading, setSwipeLoading] = useState(false);
  const [name] = useNameLocalStorage();
  const { data: currentPerson, isLoading: currentPersonLoading, error: currentPersonError } = useGetPersonFromName(name);
  const { data: similarPersonsTo, isLoading: similarPersonsToLoading, isFetching: similarPersonsToFetching, error: similarPersonsToError, refetch: refetchSimilarPersonsTo } = useGetSimilarPersonsTo(currentPerson?.id ?? '');
  const currentlyShownPerson = similarPersonsTo?.[index];


  const onSwipe = async (reaction: 'like' | 'dislike') => {
    try {
      setSwipeLoading(true);
      await handleSwipe(currentPerson?.id ?? '', currentlyShownPerson?.id ?? '', reaction);
      const nextIndex = index + 1;
      if (nextIndex >= (similarPersonsTo?.length ?? 0)) {
        refetchSimilarPersonsTo();
        setIndex(0);
        setSwipeLoading(false);
        return;
      }
      setIndex(nextIndex);
    } catch (error) {
      console.error(error);
    } finally {
      setSwipeLoading(false);
    }
  }

  if (currentPersonLoading || similarPersonsToLoading || similarPersonsToFetching) {
    return <MyLoader />;
  }

  if (currentPersonError || similarPersonsToError) {
    return <Text>Error: {currentPersonError?.message || similarPersonsToError?.message}</Text>;
  }
  return (
    <div
      style={{ position: "relative", minHeight: "100vh", marginBottom: 144 }}
    >
      <Searchbar />
      <Container size="sm" style={{ position: "relative" }}>
        <UserProfile user={{
          id: currentlyShownPerson?.id ?? '',
          name: currentlyShownPerson?.name ?? '',
          role: currentlyShownPerson?.role ?? '',
          startDate: currentlyShownPerson?.startDate ?? '',
          location: currentlyShownPerson?.location ?? '',
          lead: currentlyShownPerson?.lead ?? '',
          slackLink: currentlyShownPerson?.slackLink ?? '',
          about: currentlyShownPerson?.aboutMe ?? '',
          interests: currentlyShownPerson?.interests?.split(';') ?? [],
          affinityGroups: currentlyShownPerson?.affinityGroups?.split(';') ?? [],
          imageUrl: currentlyShownPerson?.imageUrl ?? '',
        } as User} />
        <div style={{
          position: "fixed",
          bottom: rem(80),
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: rem(320),
          zIndex: 1000,
          width: "fit-content"
        }}>
          <ActionIcon
            loading={swipeLoading}
            variant="filled"
            color="white"
            size={72}
            radius={9999}
            style={{
              boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
              padding: rem(16),
            }}
            onClick={() => onSwipe('dislike')}
          >
            <IconX size={24} color="black" />
          </ActionIcon>
          <ActionIcon
            loading={swipeLoading}
            variant="filled"
            size={72}
            radius={99999}
            style={{
              boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
              padding: rem(16),
            }}
            onClick={() => onSwipe('like')}
          >
            <IconHeart size={24} color="white" />
          </ActionIcon>
        </div>
      </Container>
    </div>
  );
};

export default Swipe;
