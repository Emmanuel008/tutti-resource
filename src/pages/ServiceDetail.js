import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ServiceDetail.css';

const services = {
  'mine-planning': {
    capability: 'Mining',
    title: 'Mine Planning',
    description: "Comprehensive mine planning services to optimise resource extraction, improve operational efficiency, and ensure long-term sustainability for small and medium-scale mining operations in Tanzania.",
    details: [
      'Geological assessment and resource estimation',
      'Mine design and layout optimisation',
      'Production scheduling and capacity planning',
      'Equipment selection and fleet management',
      'Cost modelling and financial projections',
    ],
    image: '/images/hero1.jpeg',
    color: '#b45309',
  },
  'due-diligence': {
    capability: 'Mining',
    title: 'Due Diligence',
    description: 'Technical and financial due diligence for mining projects, providing investors, operators, and lenders with independent assessments of project viability and risk.',
    details: [
      'Technical review of geological data and resource estimates',
      'Operational and financial performance assessment',
      'Regulatory and environmental compliance review',
      'Risk identification and mitigation strategies',
      'Independent expert reporting',
    ],
    image: '/images/hero1.jpeg',
    color: '#b45309',
  },
  'ehs-advisory': {
    capability: 'Mining',
    title: 'EHS Advisory',
    description: 'Environmental, Health, and Safety advisory services to help mining operations meet national and international standards, protect workers, and minimise environmental impact.',
    details: [
      'EHS management system development',
      'Environmental impact assessment support',
      'Occupational health and safety audits',
      'Incident investigation and corrective action planning',
      'Regulatory compliance monitoring',
    ],
    image: '/images/hero1.jpeg',
    color: '#b45309',
  },
  'compliance': {
    capability: 'Mining',
    title: 'Compliance',
    description: "Regulatory compliance services to ensure mining operations meet Tanzania's Mining Act requirements, environmental regulations, and reporting obligations.",
    details: [
      'Mining licence and permit management',
      'Regulatory reporting and documentation',
      'Compliance gap analysis and remediation',
      'Liaison with government agencies',
      'Ongoing compliance monitoring',
    ],
    image: '/images/hero1.jpeg',
    color: '#b45309',
  },
  'production-optimization': {
    capability: 'Mining',
    title: 'Production Optimization',
    description: 'Data-driven production optimisation to improve throughput, reduce waste, and increase profitability for mining operations.',
    details: [
      'Production bottleneck analysis',
      'Process improvement and lean mining practices',
      'Equipment utilisation and maintenance planning',
      'Grade control and ore loss minimisation',
      'Performance benchmarking and KPI tracking',
    ],
    image: '/images/hero1.jpeg',
    color: '#b45309',
  },
  'technical-advisory': {
    capability: 'Oil & Gas',
    title: 'Technical Advisory',
    description: "Expert technical advisory for oil and gas operators navigating Tanzania's growing energy sector, from exploration through to production.",
    details: [
      'Reservoir evaluation and production forecasting',
      'Well planning and drilling advisory',
      'Facilities design and engineering review',
      'Production optimisation strategies',
      'Technical risk assessment',
    ],
    image: '/images/oil.jpeg',
    color: '#0ea5e9',
  },
  'project-coordination': {
    capability: 'Oil & Gas',
    title: 'Project Coordination',
    description: 'End-to-end project coordination services to keep oil and gas projects on schedule, within budget, and compliant with regulatory requirements.',
    details: [
      'Project planning and scheduling',
      'Contractor and vendor management',
      'Budget tracking and cost control',
      'Stakeholder communication and reporting',
      'Risk management and issue resolution',
    ],
    image: '/images/oil.jpeg',
    color: '#0ea5e9',
  },
  'operational-support': {
    capability: 'Oil & Gas',
    title: 'Operational Support',
    description: 'On-the-ground operational support to help energy operators improve day-to-day performance and build internal capacity.',
    details: [
      'Operations management and process improvement',
      'Maintenance planning and reliability engineering',
      'Workforce training and capacity building',
      'HSSE compliance and incident management',
      'Performance monitoring and reporting',
    ],
    image: '/images/oil.jpeg',
    color: '#0ea5e9',
  },
  'regulatory-guidance': {
    capability: 'Oil & Gas',
    title: 'Regulatory Guidance',
    description: "Navigating Tanzania's oil and gas regulatory framework, helping operators meet PURA, TPDC, and NEMC requirements efficiently.",
    details: [
      'Regulatory mapping and compliance planning',
      'Licence and permit application support',
      'Government liaison and stakeholder engagement',
      'Environmental and social impact assessment support',
      'Ongoing regulatory monitoring',
    ],
    image: '/images/oil.jpeg',
    color: '#0ea5e9',
  },
  'investment-readiness': {
    capability: 'Financial',
    title: 'Investment Readiness',
    description: 'Preparing mining and energy projects for investment by strengthening governance, documentation, and financial reporting to meet investor expectations.',
    details: [
      'Business plan development and review',
      'Financial modelling and valuation',
      'Corporate governance improvement',
      'Investor presentation preparation',
      'Due diligence readiness assessment',
    ],
    image: '/images/finance.jpeg',
    color: '#059669',
  },
  'financial-structuring': {
    capability: 'Financial',
    title: 'Financial Structuring',
    description: 'Designing optimal financial structures for mining and energy projects to maximise capital efficiency and align with lender and investor requirements.',
    details: [
      'Debt and equity structuring advisory',
      'Project finance and loan structuring',
      'Cash flow modelling and scenario analysis',
      'Collateral and security arrangement advisory',
      'Financial covenant monitoring',
    ],
    image: '/images/finance.jpeg',
    color: '#059669',
  },
  'banking-facilitation': {
    capability: 'Financial',
    title: 'Banking Facilitation',
    description: 'Facilitating access to banking and financial services for mining and energy operators, bridging the gap between projects and financial institutions.',
    details: [
      'Bank relationship management',
      'Loan application preparation and support',
      'Trade finance and working capital solutions',
      'Account and treasury management advisory',
      'Financial institution introductions',
    ],
    image: '/images/finance.jpeg',
    color: '#059669',
  },
  'advisory': {
    capability: 'Financial',
    title: 'Advisory',
    description: 'Broad financial advisory services to support strategic decision-making for mining and energy companies at all stages of development.',
    details: [
      'Strategic financial planning',
      'Mergers, acquisitions, and partnerships advisory',
      'Tax planning and optimisation',
      'Risk management and hedging strategies',
      'Reporting and disclosure support',
    ],
    image: '/images/finance.jpeg',
    color: '#059669',
  },
  'digital-solutions': {
    capability: 'Technology',
    title: 'Digital Solutions',
    description: 'Implementing digital tools and platforms to improve operational efficiency, data management, and decision-making for mining and energy operators.',
    details: [
      'Mine management software implementation',
      'IoT and sensor integration for real-time monitoring',
      'Data analytics and reporting dashboards',
      'Digital document management systems',
      'ERP and operational software advisory',
    ],
    image: '/images/tech.jpeg',
    color: '#7c3aed',
  },
  'equipment-optimization': {
    capability: 'Technology',
    title: 'Equipment Optimization',
    description: 'Maximising equipment performance and lifespan through predictive maintenance, utilisation analysis, and technology-driven optimisation.',
    details: [
      'Equipment performance benchmarking',
      'Predictive and preventive maintenance planning',
      'Fleet management and utilisation analysis',
      'Equipment upgrade and replacement advisory',
      'Operator training and best practice implementation',
    ],
    image: '/images/tech.jpeg',
    color: '#7c3aed',
  },
  'capacity-development': {
    capability: 'Technology',
    title: 'Capacity Development',
    description: 'Building the skills and capabilities of local teams to operate modern mining and energy technologies effectively and sustainably.',
    details: [
      'Skills gap analysis and training needs assessment',
      'Customised training programme design and delivery',
      'Technical mentoring and on-the-job coaching',
      'Knowledge transfer and documentation',
      'Long-term capacity building partnerships',
    ],
    image: '/images/tech.jpeg',
    color: '#7c3aed',
  },
  'training': {
    capability: 'Technology',
    title: 'Training',
    description: 'Practical training programmes for mining and energy professionals, covering technical, safety, and operational topics.',
    details: [
      'Technical skills training for operators and technicians',
      'Safety and EHS training programmes',
      'Leadership and management development',
      'Regulatory and compliance training',
      'E-learning and blended learning solutions',
    ],
    image: '/images/tech.jpeg',
    color: '#7c3aed',
  },
};

function ServiceDetail() {
  const { slug } = useParams();
  const service = services[slug];

  if (!service) {
    return (
      <div className="service-detail-not-found">
        <h2>Service not found</h2>
        <Link to="/" className="service-detail-back">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="service-detail-hero" style={{ borderColor: service.color }}>
        <div className="service-detail-hero-inner">
          <Link to="/#services" className="service-detail-back">Back to Services</Link>
          <motion.span
            className="service-detail-capability"
            style={{ color: service.color }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {service.capability}
          </motion.span>
          <motion.h1
            className="service-detail-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            className="service-detail-description"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {service.description}
          </motion.p>
        </div>
        <motion.div
          className="service-detail-image-wrap"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img src={service.image} alt={service.title} className="service-detail-image" />
        </motion.div>
      </div>

      <div className="service-detail-body">
        <h2 className="service-detail-what">What we offer</h2>
        <ul className="service-detail-list">
          {service.details.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
            >
              <span className="service-detail-bullet" style={{ background: service.color }} />
              {item}
            </motion.li>
          ))}
        </ul>
        <div className="service-detail-cta">
          <p>Ready to get started? Contact us to discuss your needs.</p>
          <a href="/#contact" className="service-detail-cta-btn" style={{ background: service.color }}>
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
