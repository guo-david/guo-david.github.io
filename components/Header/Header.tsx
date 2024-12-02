import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Avatar, Anchor, Flex, Burger, Container, Group, Menu } from '@mantine/core';
import pfp from '../../public/pfp.jpg'
import classes from './Header.module.css';

const links = [
    { link: '#about-me', label: 'About Me' },
    { link: '#projects', label: 'Projects' },
    { link: '#contact', label: 'Contact' },

];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                if (opened) toggle()
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Flex
                    direction="row"
                    gap="md"
                    align="center"
                >
                    <Avatar
                        radius="xl"
                        size="lg"
                        src={pfp.src}
                    />
                    <Anchor
                        href=""
                        size="lg"
                        variant="gradient"
                        fw={900}
                    >
                        David Guo
                    </Anchor>
                </Flex>
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>
                <Menu opened={opened} shadow="md">
                    <Menu.Target>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                    </Menu.Target>
                    <Menu.Dropdown>
                        {items}
                    </Menu.Dropdown>
                </Menu>

            </Container>
        </header>
    );
}