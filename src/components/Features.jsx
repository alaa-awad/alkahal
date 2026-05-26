import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Zap size={40} className="text-gold" />,
      title: t('fast_service'),
      delay: 0.1
    },
    {
      icon: <ShieldCheck size={40} className="text-gold" />,
      title: t('safe_secure'),
      delay: 0.2
    },
    {
      icon: <Clock size={40} className="text-gold" />,
      title: t('support_24'),
      delay: 0.3
    }
  ];

  return (
    <section id="features" className="py-20 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="glass-card p-8 flex flex-col items-center text-center group hover:border-gold/50 transition-colors"
            >
              <div className="w-20 h-20 bg-dark rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
