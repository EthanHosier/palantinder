import { TextInput, ActionIcon, Box, rem, Paper } from "@mantine/core";
import { IconSearch, IconFilter } from "@tabler/icons-react";

const Searchbar = () => {
  return (
    <Paper radius="full" mb="md">
      <Box>
        {/* Search input */}
        <TextInput
          size="lg"
          placeholder="Search colleagues..."
          styles={{
            input: {
              borderRadius: "9999px",
              border: "none",
            },
          }}
          leftSection={
            <IconSearch style={{ width: rem(16), height: rem(16) }} />
          }
          rightSection={
            <ActionIcon variant="subtle" color="gray">
              <IconFilter style={{ width: rem(16), height: rem(16) }} />
            </ActionIcon>
          }
        />
      </Box>
    </Paper>
  );
};

export default Searchbar;
