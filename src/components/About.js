import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="about-inner">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-lead">
            Tutti Resources Limited is a proudly Tanzanian company specializing in mining, oil, and gas consultancy and technology solutions. We work closely with small and medium-scale miners, mining cooperatives, and emerging energy operators to enhance operational performance, strengthen compliance, and improve access to technical and financial expertise.
          </p>
          <p className="about-text">
            By combining industry knowledge with practical field experience, we deliver solutions that increase productivity, promote responsible resource management, and align operations with national regulatory and environmental standards. Our approach is hands-on, results-driven, and tailored to the realities of Tanzania’s extractive sector.
          </p>
        </div>
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            src="/images/about.jpeg"
            alt="Mining and construction — industrial landscape with machinery and city development"
            className="about-image"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
