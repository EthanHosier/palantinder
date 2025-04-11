import { User } from "../../../types";
import {
  Card,
  Text,
  Group,
  Badge,
  Stack,
  ActionIcon,
  rem,
  Box,
  Button,
  Modal,
  Divider,
} from "@mantine/core";
import {
  IconDots,
  IconHeart,
  IconBriefcase,
  IconCalendar,
  IconMapPin,
  IconUsers,
  IconUser,
  IconQuote,
  IconSparkles,
  IconBrandSlack,
  IconExternalLink,
  IconChevronRight,
} from "@tabler/icons-react";
import { useState } from "react";
import styles from './UserProfile.module.css';
import { useGenerateConversationTopics, useGetPersonFromName } from "../../../lib/queries";
import { useNameLocalStorage } from "../../../lib/useNameLocalStorage";
import MyLoader from "../../../components/MyLoader";

const UserProfile = ({ user }: { user: User }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log({user})

  const [name] = useNameLocalStorage();
  const {data: currentUser, isLoading: currentUserLoading, error: currentUserError} = useGetPersonFromName(name);

  const {data: conversationStarters, isLoading: conversationStartersLoading, error: conversationStartersError} = useGenerateConversationTopics(currentUser?.id ?? '', user.id, isModalOpen);


  if (currentUserLoading) {
    return <MyLoader />;
  }

  if (currentUserError) {
    return <Text>Error: {currentUserError?.message}</Text>;
  }

  // Generate conversation starters based on user profile
  const getConversationStarters = () => {
    const starters = [
      `Ask about their role as ${user.role}`,
      `Discuss their experience at the company since ${user.startDate}`,
      `Share experiences about ${user.location}`,
    ];

    if (user.interests?.length > 0) {
      user.interests.forEach(interest => {
        if (interest) {
          starters.push(`Talk about your shared interest in ${interest}`);
        }
      });
    }

    if (user.affinityGroups?.length > 0) {
      user.affinityGroups.forEach(group => {
        if (group) {
          starters.push(`Connect over being part of ${group}`);
        }
      });
    }

    return starters;
  };

  return (
    <Stack gap={0}>
      {/* Header with name and status */}
      <Group justify="space-between" p="xs">
        <Group gap={0}>
          <Text size="xl" fw={600}>
            {user.name.split(" ")[0]}
          </Text>
          <Badge
            bg="transparent"
            variant="dot"
            color="green"
            size="sm"
            styles={{
              root: {
                textTransform: "none",
                border: "none",
                color: "var(--mantine-color-green-filled)",
                paddingLeft: rem(15),
                fontSize: rem(12),
                fontWeight: 500,
              },
            }}
          >
            Active now
          </Badge>
        </Group>
        <Group gap="xs">
          <ActionIcon variant="subtle" color="gray" size="md">
            <IconDots size={20} />
          </ActionIcon>
        </Group>
      </Group>

      {/* Main profile image */}
      <Box pos="relative" style={{ display: 'flex', justifyContent: 'center' }}>
        <Box pos="relative">
          <img
            src={user.imageUrl}
            alt={user.name}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: "8px",
              maxWidth: "480px",
            }}
          />
          <ActionIcon
            variant="filled"
            color="white"
            size="xl"
            radius="xl"
            style={{
              position: "absolute",
              bottom: rem(16),
              right: rem(16),
              border: "2px solid white",
            }}
            styles={{
              root: {
                backgroundColor: "white !important",
                transition: "transform 0.2s",
                "&:active": {
                  transform: "scale(0.95)",
                  backgroundColor: "white !important",
                },
                "&:hover": {
                  backgroundColor: "white !important",
                },
              },
            }}
          >
            <IconHeart
              size={24}
              style={{
                stroke: "2px",
                color: "var(--mantine-color-myColor-5)",
              }}
            />
          </ActionIcon>
        </Box>
      </Box>

      {/* Profile Details */}
      <Box mt="md">
        <Card radius="md" p="md" bg="white" withBorder={false}>
          <Stack gap="md">
            <Group>
              <IconBriefcase size={20} color="var(--mantine-color-gray-6)" />
              <Text>{user.role}</Text>
            </Group>
            <Group>
              <IconCalendar size={20} color="var(--mantine-color-gray-6)" />
              <Text>{user.startDate}</Text>
            </Group>
            <Group>
              <IconMapPin size={20} color="var(--mantine-color-gray-6)" />
              <Text>{user.location}</Text>
            </Group>
            {user.interests && user.interests.filter(x => !!x).length > 0 && (
              <Group align="flex-start" wrap="nowrap">
                <IconHeart size={20} color="var(--mantine-color-gray-6)" />
                <Group gap="xs" wrap="wrap">
                {user.interests?.map((interest: string, index: number) => (
                  <Badge key={index} variant="light">
                    {interest}
                  </Badge>
                ))}
                </Group>
              </Group>
            )}
            {user.affinityGroups && user.affinityGroups.filter(x => !!x).length > 0 && (
              <Group align="flex-start">
                <IconUsers size={20} color="var(--mantine-color-gray-6)" />
                <Group gap="xs" wrap="wrap">
                {user.affinityGroups?.map((group: string, index: number) => (
                  <Badge key={index} variant="light">
                    {group}
                  </Badge>
                ))}
                </Group>
              </Group>
            )}
            <Group>
              <IconUser size={20} color="var(--mantine-color-gray-6)" />
              <Text>{user.lead}</Text>
            </Group>
          </Stack>
        </Card>
      </Box>

       {/* Prompt Card */}
       {!!user.about && 
       <Box mt="md">
        <Card radius="md" p="md">
          <Stack gap="xs" py="lg">
            <Group gap="xs" justify="space-between" align="center">
              <Group gap="xs">
                <div
                  style={{
                    backgroundColor: "var(--mantine-color-gray-1)",
                    padding: rem(8),
                    borderRadius: 99999,
                    height: rem(32),
                  }}
                >
                  <IconQuote size={20} />
                </div>
                <Text size="sm" fw={600}>
                  About me
                </Text>
              </Group>
              {currentUser?.id !== user.id && (
                <Button 
                  variant="light" 
                  size="xs" 
                  radius="full" 
                  leftSection={<IconSparkles size={14} />}
                  onClick={() => setIsModalOpen(true)}
              >
                Conversation Starters
              </Button>
              )}
            </Group>
            <Text size="24px" fw={400} lh="32px">
              {user.about}
            </Text>
          </Stack>
        </Card>
      </Box>
}

      {/* Conversation Ideas Modal */}
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          <Group gap="xs">
            <IconSparkles size={20} />
            <Text fw={600}>Conversation Starters</Text>
          </Group>
        }
        size="md"
      >
        <Stack gap="md">
          {conversationStartersLoading && <MyLoader />}
          {conversationStartersError && <Text>Error: {conversationStartersError?.message}</Text>}
          {conversationStarters?.map((starter, index) => (
            <Card 
              key={index} 
              withBorder
              onClick={() => window.open(user.slackLink === "" ? "https://slack.com/signin#/signin" : user.slackLink, '_blank')}
              className={styles.conversationStarter}
            >
              <Group>
                <Text style={{ flex: 1 }}>{starter}</Text>
                <IconChevronRight 
                  size={16}
                  style={{ color: 'var(--mantine-color-gray-6)' }}
                />
              </Group>
            </Card>
          ))}
        </Stack>
      </Modal>
    </Stack>
  );
};

export default UserProfile;
