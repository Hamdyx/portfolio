'use client';

import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { useState } from 'react';

import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a className={styles.brand} href="#home">
          AH
        </a>
        <div className={styles.links}>
          {NAV_LINKS.map(link => (
            <a key={link.href} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
          <Button type="primary" shape="round" href="/resume.pdf">
            Resume
          </Button>
        </div>
        <Button className={styles.menuButton} type="text" icon={<MenuOutlined />} onClick={() => setDrawerOpen(true)} />
        <Drawer title="Navigation" placement="right" onClose={() => setDrawerOpen(false)} open={drawerOpen} closeIcon={<CloseOutlined />}>
          <div className={styles.drawerLinks}>
            {NAV_LINKS.map(link => (
              <a key={link.href} className={styles.drawerLink} href={link.href} onClick={() => setDrawerOpen(false)}>
                {link.label}
              </a>
            ))}
            <Button type="primary" block href="/resume.pdf">
              Resume
            </Button>
          </div>
        </Drawer>
      </div>
    </nav>
  );
}
