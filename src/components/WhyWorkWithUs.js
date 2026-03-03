import { motion } from 'framer-motion';
import './WhyWorkWithUs.css';

const items = [
  { description: "Deep understanding of Tanzania's mining and energy landscape to guide your operations." },
  { description: 'Practical, scalable solutions tailored to local operators and cooperatives.' },
  { description: 'Integrated technical and financial advisory services under one roof.' },
  { description: 'Strong commitment to safety, compliance, and sustainability in every project.' },
  { description: 'Client-focused and results-oriented approach that delivers measurable value.' },
];

function WhyWorkWithUs() {
  return (
    <motion.section
      className="why-work-with-us"
      id="why-work-with-us"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="wwu-inner">
        <motion.div
          className="wwu-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="wwu-title">Why Work With Us</h2>
          <p className="wwu-subtitle">Reasons to partner with Tutti Resources</p>
        </motion.div>
        <ul className="wwu-cards">
          {items.map((item, index) => (
            <motion.li
              key={index}
              className="wwu-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
            >
              <p className="wwu-card-desc">{item.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default WhyWorkWithUs;
