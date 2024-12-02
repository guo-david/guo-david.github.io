import { IconArrowDownDashed } from '@tabler/icons-react';
import { ActionIcon, Group } from '@mantine/core';

// Type definition for the props
interface ScrollButtonProps {
  next: string; // The target section to scroll to (anchor ID)
}

export function ScrollButton({ next }: ScrollButtonProps) {
  return (
    <Group justify='center' style={{marginBottom: "280px"}}>
      <ActionIcon size="50px" radius="25px" variant="subtle">
        {/* Improved usage of anchor */}
        <a href={next} style={{ color: 'grey', display: 'block', textDecoration: 'none' }}>
          <IconArrowDownDashed size={45} stroke={2} color="gray" />
        </a>
      </ActionIcon>
    </Group>
  );
}
