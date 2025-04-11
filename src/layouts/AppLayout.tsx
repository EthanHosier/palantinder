import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppShell,
  Group,
  UnstyledButton,
  Text,
  rem,
  Stack,
  Tabs,
  MantineTheme,
  Container,
} from "@mantine/core";
import { IconHome, IconHeart, IconUser } from "@tabler/icons-react";

const navItems = [
  { icon: IconHome, label: "Discover", path: "/" },
  { icon: IconHeart, label: "Likes", path: "/likes" },
  { icon: IconUser, label: "Profile", path: "/profile" },
];

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppShell
      padding="md"
      header={{ height: 0 }}
      styles={{
        main: {
          backgroundColor: "#f1f1f1",
        },
      }}
    >
      <AppShell.Main
        bg="#f1f1f1"
        mb={32}
      >
        <Container size="xs" px="xs">
          <Outlet />
        </Container>
      </AppShell.Main>

      <AppShell.Footer
        p={0}
        style={{ 
          borderTop: "none",
          backgroundColor: "#f1f1f1"
        }}
      >
        <Container 
          size="xs" 
          px="xs" 
          style={{ 
            backgroundColor: "#000",
            margin: "0 auto"
          }}
        >
          <Tabs
            value={location.pathname}
            onChange={(value) => navigate(value || "/")}
            variant="default"
            radius="xl"
            styles={() => ({
              root: {
                backgroundColor: "#000",
                marginBottom: -2,
              },
              list: {
                gap: 0,
                padding: 0,
              },
              tab: {
                flex: 1,
                padding: rem(12),
                color: "rgba(255, 255, 255, 0.5)",
                backgroundColor: "transparent",
                border: "none",
                "&[dataActive]": {
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  textDecoration: "none",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  textDecoration: "none",
                },
              },
            })}
          >
            <Tabs.List>
              {navItems.map((item) => (
                <Tabs.Tab
                  mb={4}
                  key={item.path}
                  value={item.path}
                  leftSection={
                    <item.icon
                      size={28}
                      style={{
                        color:
                          location.pathname === item.path
                            ? "white"
                            : "rgba(255, 255, 255, 0.5)",
                      }}
                    />
                  }
                />
              ))}
            </Tabs.List>
          </Tabs>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
};

export default AppLayout;
