import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$19',
    period: '/month',
    features: [
      'Basic 3D modeling tools',
      'Standard rendering',
      'Community support',
      '5GB cloud storage'
    ]
  },
  {
    name: 'Professional',
    price: '$49',
    period: '/month',
    features: [
      'Advanced modeling tools',
      'Real-time rendering',
      'Priority support',
      '50GB cloud storage',
      'Team collaboration',
      'Custom plugins'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Full feature access',
      'Dedicated support',
      'Unlimited storage',
      'Custom integration',
      'Training sessions',
      'SLA guarantee'
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include updates and basic support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-green-400" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;