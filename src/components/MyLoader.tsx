import { Loader, Center } from '@mantine/core';

const MyLoader = () => {
  return (
    <Center 
      style={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'transparent',
        zIndex: 1000
      }}
    >
      <Loader size="lg" />
    </Center>
  );
};

export default MyLoader;