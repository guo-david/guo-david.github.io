import { IconBrandLinkedinFilled, IconBrandGithubFilled, IconFileCv } from '@tabler/icons-react';
import { Button, Container, Group, List, Text, ThemeIcon, Title } from '@mantine/core';
// import image from './image.svg';
import classes from './Hero.module.css';

export function Hero() {
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        Hi, I'm David! <br /> I'm a Software Engineer.
                    </Title>
                    <Text c="dimmed" mt="md">
                        Currently studying Machine Learning at the University of Toronto
                        <br />
                        Software Engineering Intern at Modiface
                    </Text>

                    <List
                        className={classes.list}
                        mt={30}
                        spacing="sm"
                        size="md"
                    >
                        < Button 
                            component='a'
                            href='https://www.linkedin.com/in/david-guo-1994221b7/'
                            target="_blank"
                            className={classes.listButton} 
                            variant='default' 
                        >
                            <List.Item
                                icon={
                                    <ThemeIcon color="blue" size={24} radius="xl">
                                        <IconBrandLinkedinFilled style={{ width: 16, height: 16 }} />
                                    </ThemeIcon>
                                }
                            >
                                <b>Linkedin</b>
                            </List.Item>
                        </Button>
                        < Button 
                            component='a'
                            href='https://github.com/davidguo123456'
                            target="_blank"
                            className={classes.listButton} 
                            variant='default' 
                        >
                            <List.Item
                                icon={
                                    <ThemeIcon color="blue" size={24} radius="xl">
                                        <IconBrandGithubFilled style={{ width: 16, height: 16 }} />
                                    </ThemeIcon>
                                }
                            >
                                <b>Github</b>
                            </List.Item>
                        </Button>
                        < Button 
                            component='a'
                            href='https://davidguo123456.github.io/CV-David-Guo.pdf'
                            target="_blank"
                            className={classes.listButton} 
                            variant='default' 
                        >
                            <List.Item
                                icon={
                                    <ThemeIcon color="blue" size={24} radius="xl">
                                        <IconFileCv style={{ width: 16, height: 16 }} />
                                    </ThemeIcon>
                                }
                            >
                                <b>CV</b>
                            </List.Item>
                        </Button>
                    </List>

                    <Group mt={30}>
                        <Button radius="xl" size="md" className={classes.control}>
                            Get started
                        </Button>
                        <Button variant="default" radius="xl" size="md" className={classes.control}>
                            Source code
                        </Button>
                    </Group>
                </div>
            </div>
        </Container>
    );
}