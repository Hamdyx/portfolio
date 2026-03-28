'use client';

import { Timeline, Typography } from 'antd';

import { EXPERIENCE } from '@/constants/experience';

import styles from './Experience.module.css';

const { Title, Text, Paragraph } = Typography;

export default function Experience() {
  const timelineItems = EXPERIENCE.map(item => ({
    color: item.current ? '#4f46e5' : '#c7c4d8',
    content: (
      <div className={styles.item}>
        <div className={styles.itemHeader}>
          <Title className={styles.itemTitle} level={4}>
            {item.title}
          </Title>
          <Text className={item.current ? styles.periodCurrent : styles.period}>{item.period}</Text>
        </div>
        <Text className={styles.company}>{item.company}</Text>
        <Paragraph className={styles.description}>{item.description}</Paragraph>
      </div>
    ),
  }));

  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <Title className={styles.heading} level={2}>
            Professional Milestones
          </Title>
          <div className={styles.divider} />
        </div>
        <div className={styles.timeline}>
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
}
