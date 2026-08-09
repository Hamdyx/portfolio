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
              {PERSONAL.bio.map(paragraph => (
                <Paragraph key={paragraph} className={styles.text}>
                  {paragraph}
                </Paragraph>
              ))}
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
