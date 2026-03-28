'use client';

import { Timeline, Typography } from 'antd';

import { EXPERIENCE } from '@/constants/experience';
import { useTheme } from '@/hooks/useTheme';

import styles from './Experience.module.css';

const { Title, Text, Paragraph } = Typography;

export default function Experience() {
  const { isDark } = useTheme();
  const activeColor = isDark ? '#a3a6ff' : '#4f46e5';
  const inactiveColor = isDark ? '#40485d' : '#c7c4d8';

  const timelineItems = EXPERIENCE.map(item => ({
    color: item.current ? activeColor : inactiveColor,
    content: (
      <div className={styles.item}>
        <div className={styles.itemHeader}>
          <Title className={styles.itemTitle} level={3}>
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
