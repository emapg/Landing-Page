import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={null}>
            <Scene3D />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl font-bold mb-6">
            Transform Your 3D Workflow
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the next generation of 3D modeling with our powerful desktop application.
            Built for professionals, designed for everyone.
          </p>
          
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
              <Download size={20} />
              Download Now
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Learn More
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;