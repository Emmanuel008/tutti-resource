import { motion } from 'framer-motion';
import '../styles/Hero.css';

const captionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

function Hero() {
  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
    >
      <div className="hero-bg">
        <img
          src="/images/saba.png"
          alt="Mining and resource development"
          className="hero-image"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <motion.span className="hero-tag" variants={captionVariants}>
          Mining, Oil & Gas Consultancy & Technology in Tanzania
        </motion.span>
        <h1 className="hero-title">
          <motion.span className="hero-title-line" variants={captionVariants}>
            We partner with
          </motion.span>
          <motion.span className="hero-title-line hero-title-accent" variants={captionVariants}>
            miners & energy operators
          </motion.span>
        </h1>
        <motion.p className="hero-subline" variants={captionVariants}>
          Expertise, compliance, and technology for Tanzania's extractive sector.
        </motion.p>
        <motion.p className="hero-keywords" variants={captionVariants}>
          Compliance • Performance • Growth • Sustainability
        </motion.p>
        <motion.a
          href="#services"
          className="hero-cta"
          variants={captionVariants}
        >
          Explore Services
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Hero;
