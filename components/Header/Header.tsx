import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Avatar, Anchor, Flex } from '@mantine/core';
import pfp from '../../public/pfp.jpg'
import classes from './Header.module.css';

const links = [
    { link: '/about', label: 'About Me' },
    { link: '/contact', label: 'Contact' },

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
                event.preventDefault();
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
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}