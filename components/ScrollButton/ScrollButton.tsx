import { IconArrowDownDashed } from '@tabler/icons-react';
import { ActionIcon, Group } from '@mantine/core';

export function ScrollButton() {
  return (
    <Group justify='center'>
      <ActionIcon size="50px" radius="25px" variant="subtle">
        <a href="#projects" style={{ color: 'grey' }}>
          <IconArrowDownDashed size={45} stroke={2} color="gray" />
        </a>
      </ActionIcon>
    </Group>
  );
}
