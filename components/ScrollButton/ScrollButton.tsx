import { IconArrowDownDashed } from '@tabler/icons-react';
import { ActionIcon, Group } from '@mantine/core';

// Type definition for the props
interface ScrollButtonProps {
  next: string; // The target section to scroll to (anchor ID)
}

export function ScrollButton({ next }: ScrollButtonProps) {
  const handleScroll = () => {
    const targetElement = document.querySelector(next);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Group justify="center" style={{ position: 'relative', zIndex: 5 }}>
      <ActionIcon
        size="50px"
        radius="25px"
        variant="subtle"
        aria-label="Scroll to next section"
        onClick={handleScroll}
      >
        <IconArrowDownDashed size={45} stroke={2} color="gray" />
      </ActionIcon>
    </Group>
  );
}
