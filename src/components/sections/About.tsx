import React from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiCloud, FiCode } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiCloud className="w-6 h-6" />,
      title: 'Cloud Engineering',
      description: 'Specializing in Google Cloud Platform architecture and solutions'
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: 'DevOps Practices',
      description: 'Implementing modern DevOps methodologies and automation'
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Infrastructure as Code',
      description: 'Building scalable and maintainable infrastructure through code'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                Cloud Engineer & DevOps Specialist
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate Cloud & Platform Engineer with expertise in Google Cloud Platform - AWS and modern DevOps practices. 
                Currently working at Sufle, I help organizations build and maintain 
                scalable cloud infrastructure and implement efficient CI/CD pipelines.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With a strong background in system administration and cloud technologies, I specialize in 
                containerization, infrastructure automation, and cloud security. I'm dedicated to staying 
                current with the latest industry trends and best practices.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-blue-500 mr-4">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 