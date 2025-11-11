import { Anchor, Card, Container, Group, Stack, Text, Title } from '@mantine/core';
import publications from '../../public/publications.json';
import { ScrollButton } from '../ScrollButton/ScrollButton';
import classes from './Publications.module.css';

type Publication = (typeof publications.data)[number];

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between" align="flex-start">
        <Stack gap={4}>
          <Text fw={600} className={classes.cardTitle}>
            {publication.title}
          </Text>
          <Text size="sm" c="dimmed">
            {publication.authors}
          </Text>
        </Stack>
        <Text size="sm" className={classes.status}>
          {publication.status}
        </Text>
      </Group>

      <Group gap="xs" className={classes.meta}>
        <Text size="sm">{publication.venue}</Text>
        <span className={classes.dot} />
        <Text size="sm" c="dimmed">
          {publication.year}
        </Text>
      </Group>

      <Text size="sm" c="dimmed">
        {publication.description}
      </Text>

      <Group justify="flex-end">
        <Anchor href={publication.link} target="_blank" rel="noreferrer" size="sm">
          View publication
        </Anchor>
      </Group>
    </Card>
  );
}

export function PublicationsSection() {
  return (
    <section className={classes.wrapper}>
      <div>
        <div className={classes.svgContainer}>
          <svg viewBox="0 0 500 50" preserveAspectRatio="xMinYMin meet">
            <path className={classes.svg} d="M0,15 C150,30 350,0 500,15 L500,00 L0,0 Z" />
          </svg>
        </div>
        <header className={classes.header}>
          <Container size="md">
            <div className={classes.inner}>
              <div className={classes.content} id="publications">
                <Stack>
                  <Title className={classes.title}>Publications</Title>
                  <Text mt="md">Selected papers and preprints.</Text>
                </Stack>
              </div>
            </div>
          </Container>
        </header>
      </div>

      <div className={classes.sectionContent}>
        <Container size="md" py="xl">
          <Stack gap="md" className={classes.cardStack}>
            {publications.data.map((publication) => (
              <PublicationCard key={publication.key} publication={publication} />
            ))}
          </Stack>
        </Container>
        <ScrollButton next="#projects" />
      </div>
    </section>
  );
}
