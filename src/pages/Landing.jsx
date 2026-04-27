import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const highlightCards = [
  {
    label: 'Donation',
    value: 'Collect funds across the world',
    accent: '#ffb703',
  },
  {
    label: 'Fundraising',
    value: 'Drive campaigns that inspire connection',
    accent: '#a855f7',
  },
  {
    label: 'Volunteer',
    value: 'Engage people who want to help',
    accent: '#22c55e',
  },
];

const features = [
  {
    icon: '🌍',
    title: 'Global Matchmaking',
    description: 'Connect NGOs and volunteers around the world through smart, mission-driven matching.',
  },
  {
    icon: '💬',
    title: 'Live Collaboration',
    description: 'Bring teams together with secure messaging, shared goals, and real-time updates.',
  },
  {
    icon: '📊',
    title: 'Impact Analytics',
    description: 'Track progress with clear metrics and community-facing storytelling dashboards.',
  },
];

const Landing = () => {
  const [typed, setTyped] = useState('');
  const [scroll, setScroll] = useState(0);
  const tagline = 'Echoing Humanity Through Technology';

  useEffect(() => {
    let current = 0;
    const interval = window.setInterval(() => {
      current += 1;
      setTyped(tagline.slice(0, current));
      if (current >= tagline.length) {
        window.clearInterval(interval);
      }
    }, 55);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY * 0.14);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="landing-page">
      <div className="landing-background" style={{ transform: `translateY(${scroll}px)` }}>
        <div className="background-grid" />
        <div className="globe">
          <div className="globe-grid" />
        </div>
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>

      <section className="landing-hero">
        <div className="hero-content">
          <div className="hero-brand">
            <div className="hero-badge">E</div>
            <span>Empowering NGOs & Volunteers</span>
          </div>
          <h1 className="hero-title">
            <span className="title-flicker">ECHORA</span>
          </h1>
          <p className="hero-tagline">{typed}</p>
          <div className="hero-actions">
            <Link to="/signup" className="btn btn-primary">Become a Volunteer</Link>
            <Link to="/signup" className="btn btn-secondary">Donate Now</Link>
          </div>
        </div>
      </section>

      <section className="section-panel landing-cards" id="quick-stats">
        {highlightCards.map((card) => (
          <article key={card.label} className="landing-card" style={{ borderColor: card.accent }}>
            <div className="landing-card-icon" style={{ background: `${card.accent}20`, color: card.accent }}>
              {card.label[0]}
            </div>
            <p className="landing-card-label">{card.label}</p>
            <h3>{card.value}</h3>
          </article>
        ))}
      </section>

      <section className="section-panel about-layout" id="about">
        <div className="about-visual">
          <div className="hero-card shimmer-card">Volunteer Network</div>
          <div className="hero-card alt-card">NGO Impact</div>
          <div className="hero-card bottom-card">Community Pulse</div>
        </div>
        <div className="about-copy about-copy-alt">
          <span className="eyebrow">We are a non-profit charity & NGO platform</span>
          <h3>Small effort. big change.</h3>
          <p>We are ready to provide better service to make the world happy. ECHORA brings together volunteers and organizations with meaningful missions and modern tools.</p>
          <div className="stats-row">
            <div>
              <strong>1.2k+</strong>
              <span>Volunteers</span>
            </div>
            <div>
              <strong>98+</strong>
              <span>NGOs</span>
            </div>
            <div>
              <strong>3.6k+</strong>
              <span>Projects</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-panel" id="features">
        <div className="section-header">
          <h2>Futuristic features for human-centered impact</h2>
          <p>Glowing technology, effortless collaboration, and community insights that keep every mission moving forward.</p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-copy">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel cta-panel">
        <div className="section-header">
          <h2>Ready to amplify your impact?</h2>
          <p>Step into a world where every volunteer is heard, every NGO is supported, and every action echoes across communities.</p>
        </div>
        <Link to="/signup" className="btn btn-primary btn-lg">Start Your Journey</Link>
      </section>
    </main>
  );
};

export default Landing;
