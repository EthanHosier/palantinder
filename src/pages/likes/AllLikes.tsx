import {
  Grid,
  Stack,
  Text,
  Image,
  ActionIcon,
  Box,
  Group,
  Paper,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { User } from "../../types";

const users: User[] = [
  {
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
      "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=612x612&w=0&k=20&c=EtRJGnNOFPJ2HniBSLWKzsL9Xf7GHinHd5y2Tx3da0E=",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Software Engineer",
    startDate: "2021-01-01",
    location: "San Francisco",
    lead: "John Doe",
    slackLink: "https://slack.com/jane-smith",
    about:
      "I'm a software engineer with a passion for building scalable and efficient systems.",
    interests: ["React", "Node.js", "Docker"],
    affinityGroups: ["Engineering", "React"],
    imageUrl:
      "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=612x612&w=0&k=20&c=EtRJGnNOFPJ2HniBSLWKzsL9Xf7GHinHd5y2Tx3da0E=",
  },
];

const AllLikes = () => {
  return (
    <Stack>
      <Text style={{ fontSize: 28, fontWeight: 600 }}>Liked</Text>
      <Grid>
        {users.map((user) => (
          <Grid.Col key={user.id} span={{ base: 6, sm: 4, md: 3 }}>
            <Paper radius="md">
              <Box ta="center">
                <Image
                  src={user.imageUrl}
                  height={200}
                  width={200}
                  radius="md"
                  mx="auto"
                  style={{ objectFit: "cover" }}
                />
                <Group justify="space-between" w="100%" mt="xs" px="xs" pb="xs">
                  <Text mt="sm" fw={500}>
                    {user.name}
                  </Text>
                  <Link to={`${window.location.pathname}/${user.id}`}>
                    <ActionIcon variant="light" size="lg" radius="md" mx="auto">
                      <IconExternalLink size={20} />
                    </ActionIcon>
                  </Link>
                </Group>
              </Box>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};

export default AllLikes;
