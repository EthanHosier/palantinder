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
} from "@mantine/core";
import { IconHome, IconHeart, IconUser } from "@tabler/icons-react";

const navItems = [
  { icon: IconHome, label: "Discover", path: "/" },
  { icon: IconHeart, label: "Likes", path: "#" },
  { icon: IconUser, label: "Profile", path: "#" },
];

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const NavbarContent = (
    <Stack gap="sm">
      {navItems.map((item) => (
        <UnstyledButton
          key={item.path}
          onClick={() => navigate(item.path)}
          style={{ padding: rem(12) }}
          data-active={location.pathname === item.path || undefined}
          styles={{
            root: (theme: MantineTheme) => ({
              color: theme.black,
              "&[data-active]": {
                backgroundColor: theme.colors.gray[1],
                borderRadius: theme.radius.sm,
              },
              "&:hover": {
                backgroundColor: theme.colors.gray[0],
              },
            }),
          }}
        >
          <Group>
            <item.icon size={24} style={{ color: "rgba(0, 0, 0, 0.7)" }} />
            <Text size="sm" c="dark">
              {item.label}
            </Text>
          </Group>
        </UnstyledButton>
      ))}
    </Stack>
  );

  return (
    <AppShell
      padding="md"
      header={{ height: 0 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: true },
      }}
      styles={{
        main: {
          backgroundColor: "white",
        },
        navbar: {
          backgroundColor: "white",
          borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      <AppShell.Navbar p="md">{NavbarContent}</AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer
        p="xs"
        hiddenFrom="sm"
        style={{ backgroundColor: "#000", borderTop: "none" }}
      >
        <Tabs
          value={location.pathname}
          onChange={(value) => navigate(value || "/")}
          variant="default"
          radius="xl"
          styles={(theme) => ({
            root: {
              backgroundColor: "#000",
            },
            list: {
              gap: 0,
              paddingBottom: rem(24),
            },
            tab: {
              flex: 1,
              padding: rem(12),
              color: "rgba(255, 255, 255, 0.5)",
              backgroundColor: "transparent",
              border: "none",
              "&[data-active]": {
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
      </AppShell.Footer>
    </AppShell>
  );
};

export default AppLayout;
