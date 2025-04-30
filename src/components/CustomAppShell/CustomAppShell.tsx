import { AppShell, Text, Group, Title } from '@mantine/core';
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

      <AppShell.Footer>
        <Group h="100%" px="md">
          <Text fz="xs" ta="center">
            Conteúdo baseado em <a href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-Livro-dos-Esp%C3%ADritos-Guillon-1.pdf" target="_blank" rel="noopener noreferrer">O Livro dos Espíritos</a>, de Allan Kardec — disponível gratuitamente pela <a href="https://www.febnet.org.br" target="_blank" rel="noopener noreferrer">FEB</a>.
          </Text>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
}
