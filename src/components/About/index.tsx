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
                I&apos;m a Software Engineer with over 6 years of experience building web applications across fintech, travel, and enterprise domains.
                Currently at Secret Escapes, I focus on frontend architecture, developer tooling, and engineering productivity.
              </Paragraph>
              <Paragraph className={styles.text}>
                I specialize in the React and TypeScript ecosystem — from complex financial dashboards and equity management platforms to high-traffic
                consumer-facing products. I care about writing clean, performant code and shipping features that make a real impact.
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
                  <Text className={styles.detailValue}>{PERSONAL.email}</Text>
                </div>
              </div>
            </div>
            <Button type="primary" size="large" icon={<DownloadOutlined />} className={styles.resumeButton} href="/Ahmed_Hamdy_Resume.pdf" download>
              Download Resume
            </Button>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              <Image src="/profile-pic--removebg.webp" alt="Ahmed Hamdy" width={450} height={450} className={styles.profileImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
