"use client";

import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconFileCv } from "@tabler/icons-react";
import { Button, Container, Group, List, Text, ThemeIcon, Title } from "@mantine/core";
import { LINKS } from "@/app/constants";
import { ScrollButton } from "@/components/ScrollButton/ScrollButton";
import classes from "./Hero.module.css";
import me from "@/public/me.png";            // ✅ cleaner alias (optional)
import NextImage from "next/image";
import { useMediaQuery } from "@mantine/hooks";

export function Hero() {
  const isDesktop = useMediaQuery("(min-width: 48em)"); // ✅ inside component
  return (
    <Container size="md" className={classes.wrapper} id="about-me">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <Group>
              Hi, I'm
              <Text
                variant="gradient"
                size="60px"
                fw={900}
                gradient={{ from: "blue", to: "green", deg: 90 }}
              >
                David!
              </Text>{" "}
              <br />
            </Group>
          </Title>

          <Text c="dimmed" mt="md">
            I'm an undergraduate student in Engineering Science (Machine Intelligence) at the University of Toronto.
            <br />
            My research experience spans <b>machine learning</b> and <b>data science</b>, with a focus on <b>multimodal dialogue systems</b>, <b>medical image analysis</b>, and <b>generative models</b>.
            <br />
            I also have practical experience with <b>large-scale datasets</b>, <b>experimental design</b>, and <b>visualization pipelines</b>, and occasionally work with frontend frameworks such as React, Vue, and Next.js to support research tools and interfaces.
          </Text>

          <List className={classes.list} mt={30} spacing="sm" size="md">
            <Button component="a" href={LINKS.linkedin} target="_blank" rel="noreferrer" className={classes.listButton} variant="default">
              <List.Item
                icon={
                  <ThemeIcon color="blue" size={24} radius="xl">
                    <IconBrandLinkedinFilled style={{ width: 16, height: 16 }} />
                  </ThemeIcon>
                }
              >
                <b>LinkedIn</b>
              </List.Item>
            </Button>

            <Button component="a" href={LINKS.github} target="_blank" rel="noreferrer" className={classes.listButton} variant="default">
              <List.Item
                icon={
                  <ThemeIcon color="blue" size={24} radius="xl">
                    <IconBrandGithubFilled style={{ width: 16, height: 16 }} />
                  </ThemeIcon>
                }
              >
                <b>GitHub</b>
              </List.Item>
            </Button>

            <Button component="a" href={LINKS.cv} target="_blank" rel="noreferrer" className={classes.listButton} variant="default">
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
            <Button component="a" href="#projects" radius="xl" size="md" className={classes.control}>
              My projects
            </Button>
            <Button component="a" href="#publications" radius="xl" size="md" className={classes.control}>
              Publications
            </Button>
            <Button component="a" href="#contact" variant="default" radius="xl" size="md" className={classes.control}>
              Contact Me
            </Button>
          </Group>
        </div>
        {isDesktop &&
          <NextImage
            className={classes.pfp}
            src={me}
            alt="David Guo portrait"
            width={400}
            height={400}
            priority
            unoptimized
          />}
      </div>

      <div className={classes.scrollButton}>
        <ScrollButton next="#publications" />
      </div>
    </Container>
  );
}
