import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'High Performance',
    description: 'Optimized for speed and efficiency, handling complex 3D models with ease.'
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Advanced Modeling',
    description: 'Professional-grade tools for precise 3D modeling and manipulation.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Real-time Rendering',
    description: 'Instant preview of changes with our powerful rendering engine.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Secure Workflow',
    description: 'Built-in version control and automatic backup systems.'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our application comes packed with professional tools designed to enhance your 3D workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;