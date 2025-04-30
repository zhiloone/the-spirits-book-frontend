import { AppShell, Burger, Group, Skeleton, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';

export const CustomAppShell = () => {
  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Title fz={24}>
            O LIVRO DOS ESPÍRITOS - WEB
          </Title>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      {/* <AppShell.Footer p="md">TODO: Footer</AppShell.Footer> */}
    </AppShell>
  );
}
