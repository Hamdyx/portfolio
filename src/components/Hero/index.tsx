'use client';

import { DownOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import Image from 'next/image';

import { PERSONAL } from '@/constants/personal';

import styles from './Hero.module.css';

const { Title, Paragraph, Text } = Typography;

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}>
        <Image src="/hero-bg.webp" alt="" fill sizes="100vw" priority />
      </div>
      <div className={styles.container}>
        <Text className={styles.tagline}>{PERSONAL.tagline}</Text>
        <Title className={styles.name} level={1}>
          {PERSONAL.name}
        </Title>
        <Paragraph className={styles.subtitle}>{PERSONAL.subtitle}</Paragraph>
        <Space size="large" wrap className={styles.socials}>
          <a className={styles.socialLink} href={PERSONAL.github} target="_blank" rel="noopener noreferrer">
            <GithubOutlined /> GitHub / {PERSONAL.githubHandle}
          </a>
          <a className={styles.socialLink} href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined /> LinkedIn / {PERSONAL.linkedinHandle}
          </a>
        </Space>
        <div className={styles.scrollIndicator}>
          <a className={styles.scrollLink} href="#about">
            <span className={styles.scrollText}>Scroll to Explore</span>
            <DownOutlined className={styles.scrollIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}
