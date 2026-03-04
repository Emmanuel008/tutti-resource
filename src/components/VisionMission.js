import { motion } from 'framer-motion';
import '../styles/VisionMission.css';

const visionIcon = (
  <svg className="vm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const missionIcon = (
  <svg className="vm-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

const checkIcon = (
  <svg className="vm-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const missionItems = [
  'To empower local miners and energy operators with professional expertise and modern technology',
  'To promote safe, efficient, and environmentally responsible practices',
  'To support regulatory compliance and financial readiness',
  "To contribute to Tanzania's long-term economic development through capacity building and innovation",
];

const blockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function VisionMission() {
  return (
    <motion.section
      className="vision-mission"
      id="vision-mission"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="vision-mission-title"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Our Vision & Mission
      </motion.h2>
      <motion.p
        className="vision-mission-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
      >
        What we stand for and how we deliver
      </motion.p>
      <div className="vision-mission-grid">
        <motion.div
          className="vm-block vm-vision"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={blockVariants}
          custom={0}
        >
          <div className="vm-block-icon" aria-hidden="true">
            {visionIcon}
          </div>
          <h3 className="vm-block-heading">Our Vision</h3>
          <p className="vm-block-text">
            To be Tanzania's trusted partner in mining, oil, and gas consultancy and technology solutions — driving sustainable growth, innovation, and operational excellence.
          </p>
        </motion.div>
        <motion.div
          className="vm-block vm-mission"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={blockVariants}
          custom={1}
        >
          <div className="vm-block-icon" aria-hidden="true">
            {missionIcon}
          </div>
          <h3 className="vm-block-heading">Our Mission</h3>
          <ul className="vm-mission-list">
            {missionItems.map((item, index) => (
              <li key={index}>
                <span className="vm-mission-check">{checkIcon}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default VisionMission;
