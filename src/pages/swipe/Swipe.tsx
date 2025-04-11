import UserProfile from "./_components/UserProfile";
import { User } from "../../types";
import Searchbar from "./_components/Searchbar";
import { ActionIcon, Loader, rem, Text } from "@mantine/core";
import { IconHeart, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useGetPersonFromName, useGetSimilarPersonsTo, handleSwipe } from "../../lib/queries";
import { queryClient } from "../../lib/utils";
import { useNameLocalStorage } from "../../lib/useNameLocalStorage";
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
    return <Loader />;
  }

  if (currentPersonError || similarPersonsToError) {
    return <Text>Error: {currentPersonError?.message || similarPersonsToError?.message}</Text>;
  }
  return (
    <div
      style={{ position: "relative", minHeight: "100vh", marginBottom: 144 }}
    >
      <Searchbar />
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
      <ActionIcon
        loading={swipeLoading}
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
        onClick={() => onSwipe('dislike')}
      >
        <IconX size={16} color="black" />
      </ActionIcon>
      <ActionIcon
        loading={swipeLoading}
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
        onClick={() => onSwipe('like')}
      >
        <IconHeart size={16} color="white" />
      </ActionIcon>
    </div>
  );
};

export default Swipe;
