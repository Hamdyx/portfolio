'use client';

import { SendOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Typography } from 'antd';

import styles from './Contact.module.css';

const { Title, Paragraph } = Typography;
const { Item } = Form;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();

  const handleFinish = () => {
    form.resetFields();
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <Title className={styles.heading} level={2}>
            Start a Conversation
          </Title>
          <Paragraph className={styles.subheading}>Let&apos;s build something exceptional together.</Paragraph>
        </div>
        <div className={styles.formWrapper}>
          <Form form={form} layout="vertical" onFinish={handleFinish} size="large">
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Item name="name" label="Full Name" rules={[{ required: true, message: 'Please enter your name' }]}>
                  <Input placeholder="John Doe" />
                </Item>
              </Col>
              <Col xs={24} md={12}>
                <Item
                  name="email"
                  label="Email Address"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                >
                  <Input placeholder="john@example.com" />
                </Item>
              </Col>
            </Row>
            <Item name="subject" label="Subject" rules={[{ required: true, message: 'Please enter a subject' }]}>
              <Input placeholder="Project Inquiry" />
            </Item>
            <Item name="message" label="Message" rules={[{ required: true, message: 'Please enter your message' }]}>
              <TextArea rows={4} placeholder="How can I help you?" />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" block size="large" icon={<SendOutlined />} className={styles.submitButton}>
                Send Message
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    </section>
  );
}
