import { KeyboardEvent, useMemo, useState } from 'react';
import { IconBrandGithubFilled, IconFileTypePdf } from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Card,
  Container,
  Group,
  Image,
  Modal,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import projects from '../../public/projects.json';
import { ScrollButton } from '../ScrollButton/ScrollButton';
import classes from './Articles.module.css';

type Article = (typeof projects.data)[number];

const deriveSkillsFromFramework = (framework: string) =>
  framework
    .split(/[,()]/)
    .map((tag) => tag.trim())
    .filter((tag) => Boolean(tag) && tag.toLowerCase() !== framework.toLowerCase());

const getSkills = (article: Article) =>
  article.skills && article.skills.length > 0 ? article.skills : deriveSkillsFromFramework(article.framework);

export function ArticlesCardsGrid() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const closeModal = () => setSelectedArticle(null);

  const cards = projects.data.map((article) => (
    <ArticleCard key={article.key} article={article} onSelect={() => setSelectedArticle(article)} />
  ));

  const modalArticle = selectedArticle;
  const modalSkills = useMemo(() => (modalArticle ? getSkills(modalArticle) : []), [modalArticle]);

  return (
    <>
      <Stack gap="xl" className={classes.wrapper}>
        <Container py="md">
          <div className={classes.articleGrid}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
          </div>
        </Container>
        <ScrollButton next="#contact" />
      </Stack>

      <Modal
        opened={modalArticle !== null}
        onClose={closeModal}
        size="lg"
        centered
        withCloseButton
        padding="lg"
        classNames={{ body: classes.modalBody }}
      >
        {modalArticle && (
          <Stack>
            <Image src={modalArticle.image} fit="contain" bg="white" radius="md" alt={modalArticle.title} />
            <Text fw={600} size="lg">
              {modalArticle.title}
            </Text>
            {modalArticle.framework && (
              <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
                {modalArticle.framework}
              </Badge>
            )}
            {modalSkills.length > 0 && (
              <Group gap="xs" className={classes.techBadges}>
                {modalSkills.map((tag) => (
                  <Badge key={tag} variant="light" size="sm" color="blue">
                    {tag}
                  </Badge>
                ))}
              </Group>
            )}
            <Text>{modalArticle.description}</Text>
            <Group justify="space-between" align="center" gap="md">
              <Text c="dimmed">
                {modalArticle.date_start} — {modalArticle.date_end}
              </Text>
              <Group justify="flex-end">
                {modalArticle.paper !== '' && (
                  <ActionIcon
                    size="lg"
                    color="gray"
                    variant="subtle"
                    component="a"
                    href={modalArticle.paper}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconFileTypePdf size={18} stroke={2} />
                  </ActionIcon>
                )}
                {modalArticle.repo !== '' && (
                  <ActionIcon
                    size="lg"
                    color="gray"
                    variant="subtle"
                    component="a"
                    href={modalArticle.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconBrandGithubFilled size={18} stroke={2} />
                  </ActionIcon>
                )}
              </Group>
            </Group>
          </Stack>
        )}
      </Modal>
    </>
  );
}

export function ArticleCard({ article, onSelect }: { article: Article; onSelect: () => void }) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect();
    }
  };
  const skills = useMemo(
    () => getSkills(article),
    [article.skills, article.framework],
  );

  return (
    <Card
      radius="md"
      className={classes.card}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Card.Section>
        <Image src={article.image} h={280} fit="contain" bg="white" alt={article.title} />
        <div className={classes.imageGrad} />
      </Card.Section>

      {article.framework && (
        <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
          {article.framework}
        </Badge>
      )}
      {skills.length > 0 && (
        <Group gap="xs" className={classes.techBadges}>
          {skills.map((tag) => (
            <Badge key={tag} variant="light" size="sm" color="blue">
              {tag}
            </Badge>
          ))}
        </Group>
      )}

      <Text className={classes.cardTitle} fw={500} component="a">
        {article.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {article.description}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Text fz="sm" c="dimmed" lineClamp={4}>
          {article.date_start} — {article.date_end}
        </Text>
        <Group gap="xs">
          {article.paper !== '' && (
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              component="a"
              href={article.paper}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              <IconFileTypePdf size={18} stroke={2} />
            </ActionIcon>
          )}
          {article.repo !== '' && (
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              component="a"
              href={article.repo}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              <IconBrandGithubFilled size={18} stroke={2} />
            </ActionIcon>
          )}
        </Group>
      </Group>
    </Card>
  );
}

export function ArticlesHeader() {
  return (
    <div>
      <div className={classes.svgContainer}>
        <svg viewBox="0 0 500 50" preserveAspectRatio="xMinYMin meet">
          <path className={classes.svg} d="M0,15 C150,30 350,0 500,15 L500,00 L0,0 Z" />
        </svg>
      </div>
      <header className={classes.header}>
        <Container size="md">
          <div className={classes.inner}>
            <div className={classes.content} id="projects">
              <Stack>
                <Title className={classes.title}>Projects</Title>
                <Text mt="md">A selection of projects I've worked on with public repositories</Text>
              </Stack>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}
