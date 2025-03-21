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
      company: 'Sufle',
      location: 'Istanbul, Turkey',
      role: 'Cloud & Platform Engineer',
      period: 'March 2025 - Present',
      description: [
        "I'm specializing in Hybrid Cloud and Multi-Cluster Kubernetes, designing scalable cloud architectures with a strong focus on AWS technologies. At Sufle, I provide support to dedicated customers and help software teams optimize their cloud environments.",
        "I leverage AWS services such as EC2, S3, Lambda, ECS, and EKS etc. to build resilient cloud infrastructures. I also automate infrastructure with Terraform and embrace Infrastructure as Code (IaC) best practices.",
        "With a deep interest in observability and security, I explore eBPF technologies to enhance networking, monitoring, and system security. I implement Cloud Security best practices and focus on logging, monitoring, and incident response.",
        "I continuously learn and integrate CNCF tools and cutting-edge cloud-native technologies to drive innovation and efficiency in cloud engineering."
      ]
    },
    {
      company: 'ACEDEMAND IT Consulting Services - Google Premier Partner',
      location: 'Istanbul, Turkey',
      role: 'DevOps & Cloud Engineer',
      period: 'March 2024 - Present',
      description: [
        "I'm honing my skills in Hybrid Cloud and Multi-Cluster Kubernetes, building scalable cloud architectures. I provide DevOps-Cloud and Google Cloud consultancy, optimizing infrastructures for both domestic and international projects.",
        "I'm skilled in automating infrastructure with Terraform and applying IaC practices. I'm also proficient in Kubernetes, Istio, Anthos Service Mesh, and managing APIs with Apigee.",
        "I focus on logging, monitoring, and network security, ensuring system integrity and implementing Cloud Security best practices. I also streamline CI/CD pipelines to accelerate software development and deployment.",
        "I'm always learning and applying CNCF tools to stay updated with cloud-native tech."
      ]
    },
    {
      company: 'Zip Turkey',
      location: 'Istanbul, Turkey',
      role: 'DevOps Engineer',
      period: 'May 2023 - March 2024',
      description: [
        "I'm honing my skills in DevOps & infrastructure, focusing on Kubernetes administration, Grafana, Prometheus, Zabbix, Ansible, ArgoCD, Graylog, Elasticstack, GitLab, HashiCorp Vault, OneSpan, Nexus, Longhorn, and Ceph.",
        "I play a key role in DevSecOps, actively contributing to container and application security. I collaborate with PrismaCloud to strengthen security measures across our infrastructure, ensuring the safety of both our applications and containerized environments."
      ]
    },
    {
      company: 'Formica',
      location: 'Istanbul, Turkey',
      role: 'DevOps Intern',
      period: 'August 2022 - November 2022',
      description: [
        "I've improved my skills in areas like Docker, Kubernetes, Helm, Ansible, Heroku, RabbitMQ, Apache Kafka, Redis, Grafana, Prometheus, Traefik, MongoDB, and Go. I've also gained experience with CI/CD processes and learned how Elasticsearch works."
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
