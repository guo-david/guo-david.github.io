import { IconMailFilled, IconBrandLinkedinFilled, IconBrandGithubFilled } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import classes from './Footer.module.css';


export function Footer() {

    return (
        <footer className={classes.footer}>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm">
                    © 2024 David Guo. All rights reserved.
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <a href='mailto:davidmy.guo@mail.utoronto.ca' target="_blank" style={{color:"grey"}}>
                            <IconMailFilled size={18} stroke={1.5} />
                        </a>
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <a href='https://www.linkedin.com/in/david-guo-1994221b7/' target="_blank" style={{color:"grey"}}>
                            <IconBrandLinkedinFilled size={18} stroke={1.5} />
                        </a>
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <a href='https://github.com/davidguo123456' target="_blank" style={{color:"grey"}}>
                            <IconBrandGithubFilled size={18} stroke={1.5} />
                        </a>
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}