import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ServicesShowcase.css';

const NUM_CASES = 4;

const cases = [
  {
    id: 'mining',
    name: 'Mining Consultancy',
    label: 'Mining',
    color: '#b45309',
    image: '/images/hero1.jpeg',
    tags: ['Mine Planning', 'Due Diligence', 'EHS Advisory', 'Compliance', 'Production Optimization'],
    title: 'Strengthening Tanzania’s mining sector through planning, compliance, and operational excellence.',
    description: 'We support small and medium-scale miners and cooperatives with technical due diligence, regulatory compliance, and environmental and safety advisory—enabling sustainable, responsible operations aligned with national standards.',
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas Support',
    label: 'Oil & Gas',
    color: '#0ea5e9',
    image: '/images/oil.jpeg',
    tags: ['Technical Advisory', 'Project Coordination', 'Regulatory Guidance', 'Operational Support'],
    title: 'Supporting oil and gas operators with technical and regulatory expertise across the value chain.',
    description: 'From project coordination to compliance guidance, we help emerging energy operators navigate regulatory requirements and improve operational performance in Tanzania’s growing oil and gas landscape.',
  },
  {
    id: 'financial',
    name: 'Financial & Banking',
    label: 'Financial',
    color: '#059669',
    image: '/images/finance.jpeg',
    tags: ['Investment Readiness', 'Financial Structuring', 'Banking Facilitation', 'Advisory'],
    title: 'Enabling mining and energy projects with investment readiness and banking facilitation.',
    description: 'We provide financial structuring, investment readiness support, and banking facilitation so mining and energy projects can access capital and align with lender and investor expectations.',
  },
  {
    id: 'technology',
    name: 'Technology & Capacity',
    label: 'Technology',
    color: '#7c3aed',
    image: '/images/tech.jpeg',
    tags: ['Digital Solutions', 'Equipment Optimization', 'Training', 'Capacity Development'],
    title: 'Driving efficiency and capacity through technology and skills development.',
    description: 'We introduce and integrate modern mining technologies, optimize equipment performance, deliver digital solutions for operational efficiency, and run training and skills development programs for local teams.',
  },
];

function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const active = cases[activeIndex];

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const viewHeight = window.innerHeight;
      const sectionHeight = el.offsetHeight;
      const sectionTop = el.offsetTop;
      const scrollY = window.scrollY;
      // Progress through the section (0 at start, 1 at end); card is sticky so only content changes
      const scrollRange = Math.max(1, sectionHeight - viewHeight);
      const scrolledInto = scrollY - sectionTop;
      const progress = Math.max(0, Math.min(1, scrolledInto / scrollRange));
      const index = Math.min(NUM_CASES - 1, Math.floor(progress * NUM_CASES));
      setActiveIndex(index);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <motion.section
      className="services-showcase"
      id="services"
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="showcase-sticky-wrap">
        <h2 className="showcase-title">Our Area of Capabilities</h2>
        <div
          className="capabilities showcase-card"
        style={{
          '--showcase-accent': active.color,
          '--showcase-content-bg': getCardBg(active.color),
        }}
      >
        <div className="capabilities-sidebar showcase-nav" role="list" aria-label="Area of capabilities">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              role="listitem"
              className={`showcase-nav-item ${index === activeIndex ? 'active' : ''}`}
              style={index === activeIndex ? { '--item-accent': item.color } : undefined}
              aria-current={index === activeIndex ? 'true' : undefined}
              initial={false}
              animate={{
                backgroundColor: index === activeIndex ? 'rgba(0, 0, 0, 0.06)' : 'transparent',
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="showcase-nav-dot" />
              <span className="showcase-nav-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="capability-content showcase-content">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              className="showcase-content-body"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="showcase-content-text">
                <div className="showcase-content-header">
                  <motion.span
                    className="showcase-badge"
                    style={{ color: active.color }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    {active.label}
                  </motion.span>
                  <motion.div
                    className="showcase-tags"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.08 }}
                  >
                    {active.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="showcase-tag"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.03 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
                <motion.h3
                  className="showcase-content-title"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  className="showcase-content-description"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 }}
                >
                  {active.description}
                </motion.p>
              </div>
              {active.image && (
                <motion.div
                  className="showcase-content-image-wrapper"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <img src={active.image} alt="" className="showcase-content-image" />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </div>
    </motion.section>
  );
}

function getCardBg(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, 0.12)`;
}

export default ServicesShowcase;
