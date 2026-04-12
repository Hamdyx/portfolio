'use client';

import { Skeleton, Space } from 'antd';

import styles from './page.module.css';

export default function Loading() {
  return (
    <output className={styles.loading} aria-busy="true" aria-label="Loading content">
      <Space orientation="vertical" size="large" style={{ width: '100%', padding: '120px 24px 60px' }}>
        <Skeleton active paragraph={{ rows: 4 }} />
        <Skeleton active paragraph={{ rows: 6 }} />
        <Skeleton active paragraph={{ rows: 4 }} />
      </Space>
    </output>
  );
}
