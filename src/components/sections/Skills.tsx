import React from 'react';
import { motion } from 'framer-motion';
import { FiCloud, FiBox, FiCode, FiServer, FiGitBranch, FiActivity, FiDatabase, FiShield, FiLayers } from 'react-icons/fi';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    icon: <FiCloud className="w-6 h-6" />,
    skills: ['Google Cloud Platform', 'Microsoft Azure', 'AWS', 'Heroku', 'Anthos Service Mesh']
  },
  {
    title: 'Container Orchestration',
    icon: <FiBox className="w-6 h-6" />,
    skills: ['Kubernetes', 'Docker', 'Helm', 'ArgoCD', 'Istio', 'Traefik', 'Longhorn', 'Ceph']
  },
  {
    title: 'Infrastructure as Code',
    icon: <FiServer className="w-6 h-6" />,
    skills: ['Terraform', 'Ansible', 'AWX', 'HashiCorp Vault', 'GitLab', 'OneSpan']
  },
  {
    title: 'CI/CD & Version Control',
    icon: <FiGitBranch className="w-6 h-6" />,
    skills: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Nexus', 'Apigee']
  },
  {
    title: 'Monitoring & Logging',
    icon: <FiActivity className="w-6 h-6" />,
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Graylog', 'Elasticstack']
  },
  {
    title: 'Storage & Data Management',
    icon: <FiDatabase className="w-6 h-6" />,
    skills: ['MongoDB', 'Redis', 'PostgreSQL', 'Longhorn', 'Ceph']
  },
  {
    title: 'Message Queuing',
    icon: <FiLayers className="w-6 h-6" />,
    skills: ['RabbitMQ', 'Apache Kafka']
  },
  {
    title: 'API & Security',
    icon: <FiShield className="w-6 h-6" />,
    skills: ['Apigee', 'OAuth/OIDC', 'PrismaCloud', 'HashiCorp Vault']
  },
  {
    title: 'Programming & Scripting',
    icon: <FiCode className="w-6 h-6" />,
    skills: ['Python', 'Go', 'Bash', 'REST APIs']
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Expertise</h2>
          <p className="section-subtitle">
            Specialized in DevOps practices, cloud technologies, and infrastructure automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {category.icon}
                </div>
                <h3 className="card-title">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 