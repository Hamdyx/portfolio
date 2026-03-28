'use client';

import { CloseOutlined, MenuOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { useEffect, useState } from 'react';

import { useTheme } from '@/hooks/useTheme';

import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map(link => link.href.slice(1));

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a className={styles.brand} href="#home">
          AH
        </a>
        <div className={styles.links}>
          {NAV_LINKS.map(link => (
            <a key={link.href} className={`${styles.link} ${activeSection === link.href.slice(1) ? styles.linkActive : ''}`} href={link.href}>
              {link.label}
            </a>
          ))}
          <Button type="text" shape="circle" icon={isDark ? <SunOutlined /> : <MoonOutlined />} onClick={toggle} aria-label="Toggle theme" />
          <Button type="primary" shape="round" href="/resume.pdf">
            Resume
          </Button>
        </div>
        <Button className={styles.menuButton} type="text" icon={<MenuOutlined />} onClick={() => setDrawerOpen(true)} />
        <Drawer title="Navigation" placement="right" onClose={() => setDrawerOpen(false)} open={drawerOpen} closeIcon={<CloseOutlined />}>
          <div className={styles.drawerLinks}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                className={`${styles.drawerLink} ${activeSection === link.href.slice(1) ? styles.drawerLinkActive : ''}`}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button type="primary" block href="/resume.pdf">
              Resume
            </Button>
            <Button type="default" block icon={isDark ? <SunOutlined /> : <MoonOutlined />} onClick={toggle}>
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>
        </Drawer>
      </div>
    </nav>
  );
}
