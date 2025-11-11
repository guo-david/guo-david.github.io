import { MouseEvent, useState } from 'react';
import { Anchor, Burger, Container, Flex, Group, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import pfp from '../../public/pfp.jpg';
import NextImage from 'next/image';
import classes from './Header.module.css';

const links = [
  { link: '#about-me', label: 'About Me' },
  { link: '#publications', label: 'Publications' },
  { link: '#projects', label: 'Projects' },
  { link: '#contact', label: 'Contact' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const handleNavClick = (event: MouseEvent<HTMLElement>, target: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (opened) {
      toggle();
    }
    setActive(target);
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => handleNavClick(event, link.link)}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Flex direction="row" gap="md" align="center">
          <div className={classes.avatarWrapper}>
            <NextImage
              src={pfp}
              alt="David Guo"
              fill
              sizes="48px"
              priority
              className={classes.avatarImage}
            />
          </div>
          <Anchor href="" size="lg" variant="gradient" fw={900}>
            David Guo
          </Anchor>
        </Flex>
        <div>
          <Group gap={5} visibleFrom="xs" align="center">
            {items}
          </Group>
          <div style={{ zIndex: '9999' }}>
            <Menu opened={opened} shadow="md">
              <Menu.Target>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
              </Menu.Target>
              <Menu.Dropdown>{items}</Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </Container>
    </header>
  );
}
