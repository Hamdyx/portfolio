'use client';

import { DownloadOutlined, EnvironmentOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import Image from 'next/image';

import { PERSONAL } from '@/constants/personal';

import styles from './About.module.css';

const { Title, Paragraph, Text } = Typography;

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <Title className={styles.heading} level={2}>
              About Me
            </Title>
            <div className={styles.bio}>
              <Paragraph className={styles.text}>
                I&apos;m a Frontend Software Engineer with 6+ years building scalable React and TypeScript applications in monorepo architectures across
                fintech, travel, and enterprise domains. Currently at Secret Escapes, I ship features across a Yarn 4 monorepo of React + TypeScript SPAs and
                maintain shared component libraries for partner-facing tools.
              </Paragraph>
              <Paragraph className={styles.text}>
                I have a proven track record reducing bundle sizes by 60%, improving load times by 50%, and driving 100% unit test coverage across enterprise
                platforms. I&apos;m experienced in CI/CD pipelines, accessibility (WCAG), and AI-assisted development — including authoring custom Copilot
                agents for end-to-end agentic PR delivery.
              </Paragraph>
            </div>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <EnvironmentOutlined />
                </div>
                <div>
                  <Text className={styles.detailLabel}>Location</Text>
                  <Text className={styles.detailValue}>{PERSONAL.location}</Text>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <MailOutlined />
                </div>
                <div>
                  <Text className={styles.detailLabel}>Email</Text>
                  <a href={`mailto:${PERSONAL.email}`} className={styles.detailLink}>
                    <Text className={styles.detailValue}>{PERSONAL.email}</Text>
                  </a>
                </div>
              </div>
            </div>
            <Button type="primary" size="large" icon={<DownloadOutlined />} className={styles.resumeButton} href="/Ahmed_Hamdy_Resume.pdf" download>
              Download Resume
            </Button>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              <Image
                src="/profile-pic--removedbg.webp"
                alt="Ahmed Hamdy — Software Engineer"
                width={450}
                height={492}
                sizes="(max-width: 768px) 300px, 450px"
                loading="lazy"
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
