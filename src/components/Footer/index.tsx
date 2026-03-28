'use client';

import { GithubOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';

import { PERSONAL } from '@/constants/personal';

import styles from './Footer.module.css';

const { Text } = Typography;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Text className={styles.copyright}>&copy; {new Date().getFullYear()} Ahmed Hamdy. Built with precision.</Text>
        <Space size="large">
          <a className={styles.link} href={PERSONAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubOutlined />
          </a>
          <a className={styles.link} href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinOutlined />
          </a>
          <a className={styles.link} href={PERSONAL.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <TwitterOutlined />
          </a>
          <a className={styles.link} href={`mailto:${PERSONAL.email}`} aria-label="Email">
            <MailOutlined />
          </a>
        </Space>
      </div>
    </footer>
  );
}
