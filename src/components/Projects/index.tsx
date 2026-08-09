'use client';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Typography } from 'antd';
import Image from 'next/image';

import { PROJECTS } from '@/constants/projects';

import styles from './Projects.module.css';

const { Title, Paragraph, Text } = Typography;

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <Title className={styles.heading} level={2}>
              Selected Works
            </Title>
            <Text className={styles.subheading}>A showcase of engineering excellence.</Text>
          </div>
        </div>
        <Row gutter={[24, 24]}>
          {PROJECTS.map(project => (
            <Col key={project.title} xs={24} md={8}>
              <Card
                className={styles.card}
                hoverable
                cover={
                  <div className={styles.cover}>
                    <Image src={project.image} alt={`Screenshot of ${project.title} project`} fill sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                }
              >
                <Title className={styles.cardTitle} level={3}>
                  {project.title}
                </Title>
                <Paragraph className={styles.cardDescription}>{project.description}</Paragraph>
                <div className={styles.cardActions}>
                  {project.demoUrl && (
                    <Button type="link" className={styles.actionLink} href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Demo <ArrowRightOutlined />
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button type="link" className={styles.actionLink} href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </Button>
                  )}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
