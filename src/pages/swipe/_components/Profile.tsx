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
import { IconDots, IconHeart } from "@tabler/icons-react";

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
    </Stack>
  );
};

export default Profile;
