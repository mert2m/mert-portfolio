import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'ACEDEMAND IT Consulting Services',
    location: 'Istanbul, Turkey',
    role: 'DevOps & Cloud Engineer',
    period: 'September 2023 - Present',
    description: [
      'Architecting and implementing cloud infrastructure solutions on Google Cloud Platform and Microsoft Azure',
      'Designing and maintaining CI/CD pipelines using Jenkins, GitHub Actions, and ArgoCD',
      'Managing containerized applications with Kubernetes, including cluster setup and maintenance',
      'Implementing Infrastructure as Code using Terraform and Ansible',
      'Setting up monitoring and logging solutions with ELK Stack, Prometheus, and Grafana',
      'Automating deployment processes and implementing DevOps best practices'
    ]
  },
  {
    company: 'Zip Turkey',
    location: 'Istanbul, Turkey',
    role: 'DevOps Engineer',
    period: 'March 2023 - September 2023',
    description: [
      'Led infrastructure automation initiatives using Terraform and Ansible',
      'Managed Kubernetes clusters and implemented service mesh solutions',
      'Developed and maintained CI/CD pipelines for microservices architecture',
      'Implemented monitoring and alerting systems using Prometheus and Grafana',
      'Collaborated with development teams to optimize deployment processes'
    ]
  },
  {
    company: 'Formica',
    location: 'Istanbul, Turkey',
    role: 'Cloud Engineer',
    period: 'June 2022 - March 2023',
    description: [
      'Managed cloud infrastructure on AWS and Google Cloud Platform',
      'Implemented containerization strategies using Docker and Kubernetes',
      'Developed automation scripts for infrastructure management',
      'Maintained CI/CD pipelines and deployment processes',
      'Collaborated on cloud security implementations and best practices'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-title">
          <h2>Professional Experience</h2>
          <p className="section-subtitle">
            Building and scaling cloud infrastructure with modern DevOps practices
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              
              <div className="card mb-8 last:mb-0">
                <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                  <div>
                    <h3 className="card-title flex items-center gap-2">
                      <FiBriefcase className="text-blue-700 dark:text-blue-400" />
                      {exp.role} @ {exp.company}
                    </h3>
                    <p className="card-subtitle flex items-center gap-2">
                      <FiMapPin className="text-blue-600 dark:text-blue-500" />
                      {exp.location}
                    </p>
                  </div>
                  <p className="card-subtitle flex items-center gap-2">
                    <FiCalendar className="text-blue-600 dark:text-blue-500" />
                    {exp.period}
                  </p>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="text-blue-900 dark:text-blue-100 flex items-start gap-2"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 