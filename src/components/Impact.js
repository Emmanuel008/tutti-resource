import { motion } from 'framer-motion';
import './Impact.css';

const stats = [
  { value: '10+', label: 'Partners & companies' },
  { value: '100+', label: 'Clients served' },
  { value: '20+', label: 'Regions' },
];

function Impact() {
  return (
    <motion.section
      className="impact"
      id="impact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="impact-inner">
        <motion.h2
          className="impact-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Our Impact
        </motion.h2>
        <motion.p
          className="impact-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          At Tutti Resources Limited, we are committed to strengthening Tanzania's extractive industries by empowering local operators, improving standards, and delivering measurable value across every project we undertake.
        </motion.p>
        <motion.div
          className="impact-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="impact-stat"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <span className="impact-stat-value">{stat.value}</span>
              <span className="impact-stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Impact;
