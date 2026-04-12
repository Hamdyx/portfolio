'use client';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Typography } from 'antd';
import Image from 'next/image';

import { PROJECTS } from '@/constants/projects';

import styles from './Projects.module.css';

const { Title, Paragraph, Text } = Typography;

const GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #4f46e5 0%, #3525cd 100%)',
  'linear-gradient(135deg, #004d70 0%, #006693 100%)',
];

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
          {PROJECTS.map((project, index) => (
            <Col key={project.title} xs={24} md={8}>
              <Card
                className={styles.card}
                hoverable
                cover={
                  project.image ? (
                    <div className={styles.cover}>
                      <Image src={project.image} alt={`Screenshot of ${project.title} project`} fill sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                  ) : (
                    <div className={styles.cover} style={{ background: GRADIENTS[index % GRADIENTS.length] }}>
                      <span className={styles.coverText}>{project.title}</span>
                    </div>
                  )
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
