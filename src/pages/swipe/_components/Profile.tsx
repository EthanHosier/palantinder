import React from "react";
import { User } from "src/types";
import {
  Card,
  Text,
  Group,
  Badge,
  Stack,
  ActionIcon,
  rem,
  Box,
} from "@mantine/core";
import {
  IconDots,
  IconHeart,
  IconBriefcase,
  IconCalendar,
  IconMapPin,
  IconUsers,
  IconUser,
} from "@tabler/icons-react";

const Profile = ({ user }: { user: User }) => {
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
            <IconDots style={{ width: rem(20), height: rem(20) }} />
          </ActionIcon>
        </Group>
      </Group>

      {/* Main profile image */}
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
            borderRadius: "16px",
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
            style={{
              width: rem(24),
              height: rem(24),
              stroke: "2px",
              color: "var(--mantine-color-myColor-5)",
            }}
          />
        </ActionIcon>
      </Box>

      {/* Prompt Card */}
      <Box mt="md">
        <Card radius="md" p="md">
          <Stack gap="xs" py="lg">
            <Text size="sm" fw={600}>
              You guys should talk about
            </Text>
            <Text size="24px" fw={400} lh="32px">
              Your shared passion for football{" "}
            </Text>
          </Stack>
        </Card>
      </Box>

      {/* Profile Details */}
      <Box mt="md">
        <Card radius="md" p="md">
          <Stack gap="md">
            <Group>
              <IconBriefcase
                style={{ width: rem(20), height: rem(20) }}
                color="var(--mantine-color-gray-6)"
              />
              <Text>{user.role}</Text>
            </Group>
            <Group>
              <IconCalendar
                style={{ width: rem(20), height: rem(20) }}
                color="var(--mantine-color-gray-6)"
              />
              <Text>{user.startDate}</Text>
            </Group>
            <Group>
              <IconMapPin
                style={{ width: rem(20), height: rem(20) }}
                color="var(--mantine-color-gray-6)"
              />
              <Text>{user.location}</Text>
            </Group>
            <Group align="flex-start">
              <IconHeart
                style={{ width: rem(20), height: rem(20) }}
                color="var(--mantine-color-gray-6)"
              />
              <Group gap="xs" wrap="wrap">
                {user.interests?.map((interest, index) => (
                  <Badge key={index} variant="light">
                    {interest}
                  </Badge>
                ))}
              </Group>
            </Group>
            <Group align="flex-start">
              <IconUsers
                style={{ width: rem(20), height: rem(20) }}
                color="var(--mantine-color-gray-6)"
              />
              <Group gap="xs" wrap="wrap">
                {user.affinityGroups?.map((group, index) => (
                  <Badge key={index} variant="light">
                    {group}
                  </Badge>
                ))}
              </Group>
            </Group>
            <Group>
              <IconUser
                style={{ width: rem(20), height: rem(20) }}
                color="var(--mantine-color-gray-6)"
              />
              <Text>{user.lead}</Text>
            </Group>
          </Stack>
        </Card>
      </Box>
    </Stack>
  );
};

export default Profile;
