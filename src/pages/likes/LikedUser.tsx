import { useParams } from 'react-router-dom';
import { useGetUser } from '../../lib/queries';
import { Text, Button, Stack } from '@mantine/core';
import UserProfile from '../swipe/_components/UserProfile';
import { useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';
import MyLoader from '../../components/MyLoader';

const LikedUser = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetUser(id ?? '');

  if (isLoading) {
    return <MyLoader />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data) {
    return <Text>No data</Text>;
  }

  return (
    <Stack gap="md">
      <Button 
        variant="subtle" 
        leftSection={<IconArrowLeft size={16} />}
        onClick={() => navigate('/likes')}
        style={{ alignSelf: 'flex-start' }}
        color="black"
      >
        Back to Likes
      </Button>
      <UserProfile user={{
        id: data.id,
        name: data.name,
        about: data.aboutMe,
        imageUrl: data.imageUrl,
        role: data.role,
        startDate: data.startDate,
        location: data.location,
        lead: data.lead,
        interests: data.interests.split(';'),
        affinityGroups: data.affinityGroups.split(';'),
        slackLink: data.slackLink ?? '',
      }} />
    </Stack>
  );
};

export default LikedUser;
