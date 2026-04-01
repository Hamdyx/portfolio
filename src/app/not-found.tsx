'use client';

import { HomeOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';

import styles from './not-found.module.css';

const { Title, Paragraph } = Typography;

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Title className={styles.code} level={1}>
          404
        </Title>
        <Title className={styles.heading} level={2}>
          Page Not Found
        </Title>
        <Paragraph className={styles.text}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</Paragraph>
        <Button type="primary" size="large" icon={<HomeOutlined />} href="/">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
