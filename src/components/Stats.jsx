import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "10,000+", label: t('stats_trips') },
    { value: "5,000+", label: t('stats_clients') },
    { value: "7", label: t('stats_cities') }
  ];

  return (
    <section className="py-16 bg-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6"
            >
              <h4 className="text-5xl md:text-6xl font-black text-dark mb-2">{stat.value}</h4>
              <p className="text-xl font-bold text-dark/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
