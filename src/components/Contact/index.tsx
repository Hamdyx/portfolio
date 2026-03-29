'use client';

import { CheckCircleOutlined, SendOutlined } from '@ant-design/icons';
import { Alert, Button, Col, Form, Input, Row, Typography } from 'antd';
import { useState } from 'react';

import styles from './Contact.module.css';

const { Title, Paragraph } = Typography;
const { Item } = Form;
const { TextArea } = Input;

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFinish = async (values: ContactFormValues) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const text = await response.text();
        const data = text ? JSON.parse(text) : {};
        throw new Error(data.error || 'Something went wrong.');
      }

      form.resetFields();
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
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
          {submitted ? (
            <Alert
              title="Message Sent!"
              description="Thank you for reaching out. I'll get back to you soon."
              type="success"
              showIcon
              icon={<CheckCircleOutlined />}
              action={
                <Button size="small" type="link" onClick={() => setSubmitted(false)}>
                  Send another
                </Button>
              }
            />
          ) : (
            <Form form={form} layout="vertical" onFinish={handleFinish} size="large">
              {error && (
                <Item>
                  <Alert title={error} type="error" showIcon closable={{ onClose: () => setError(null) }} />
                </Item>
              )}
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Item name="name" label="Full Name" rules={[{ required: true, message: 'Please enter your name' }]}>
                    <Input placeholder="John Doe" disabled={loading} />
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
                    <Input placeholder="john@example.com" disabled={loading} />
                  </Item>
                </Col>
              </Row>
              <Item name="subject" label="Subject" rules={[{ required: true, message: 'Please enter a subject' }]}>
                <Input placeholder="Project Inquiry" disabled={loading} />
              </Item>
              <Item name="message" label="Message" rules={[{ required: true, message: 'Please enter your message' }]}>
                <TextArea rows={4} placeholder="How can I help you?" disabled={loading} />
              </Item>
              <Item>
                <Button type="primary" htmlType="submit" block size="large" icon={<SendOutlined />} className={styles.submitButton} loading={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Item>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
