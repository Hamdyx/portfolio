'use client';

import { Card, Col, Row, Typography } from 'antd';

import { SKILLS } from '@/constants/skills';

import styles from './Skills.module.css';

const { Title, Text } = Typography;

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <Title className={styles.heading} level={2}>
          Tech Stack &amp; Mastery
        </Title>
        <Row gutter={[12, 12]}>
          {SKILLS.map(skill => (
            <Col key={skill.name} xs={8} sm={6} md={4}>
              <Card className={styles.card} hoverable>
                <div className={styles.cardContent}>
                  <Text className={styles.skillName}>{skill.name}</Text>
                  <Text className={styles.skillCategory}>{skill.category}</Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
