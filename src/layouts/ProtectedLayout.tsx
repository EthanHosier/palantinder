import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../lib/osdk";
import { useState, useEffect } from "react";
import { useNameLocalStorage } from "../lib/useNameLocalStorage";
import { Modal, TextInput, Button, Stack } from '@mantine/core';

export const ProtectedLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [name, setName] = useNameLocalStorage();
  const [tempName, setTempName] = useState('');
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!auth.getTokenOrUndefined()) {
          const token = await auth.signIn();
          // You might want to do something with the token here
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Authentication error:', error);
        // Handle authentication error (e.g., redirect to login page)
        alert("Authentication error");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleSubmitName = () => {
    if (tempName.trim()) {
      setName(tempName.trim());
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!name) {
    return (
      <Modal
        opened={true}
        onClose={() => {}}
        title="Please enter your FULL name. It MUST BE the same name as in your people.palantir.tech profile. E.g. Ethan Hosier"
        closeOnClickOutside={false}
        closeOnEscape={false}
        withCloseButton={false}
      >
        <Stack>
          <TextInput
            label="Your Name"
            placeholder="Enter your name"
            value={tempName}
            onChange={(event) => setTempName(event.currentTarget.value)}
            required
          />
          <Button
            onClick={handleSubmitName}
            disabled={!tempName.trim()}
            fullWidth
          >
            Continue
          </Button>
        </Stack>
      </Modal>
    );
  }

  return <Outlet />;
};

export default ProtectedLayout;
