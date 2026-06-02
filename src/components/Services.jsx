import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import vipImg from '../assets/vip_delivery_1779785840193.png';
import furnitureImg from '../assets/furniture_parcels_1779790065164.png';
import foodImg from '../assets/food_delivery_1779785925660.png';
import animalImg from '../assets/animal_transport_1779786204688.png';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('vip_delivery'),
      desc: t('vip_desc'),
      img: vipImg,
    },
    {
      title: t('workers_delivery'),
      desc: t('workers_desc'),
      img: furnitureImg,
    },
    {
      title: t('food_delivery'),
      desc: t('food_desc'),
      img: foodImg,
    },
    {
      title: t('animal_transport'),
      desc: t('animal_desc'),
      img: animalImg,
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t('our_services')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gold mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-dark-lighter border border-white/5 hover:border-gold/30 transition-all shadow-xl hover:shadow-gold/20"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 relative z-20 bg-dark-lighter">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-6 flex justify-end">
                  <a href="https://wa.me/971505161988" target="_blank" rel="noopener noreferrer" onClick={() => {
                    if (typeof window.gtag === 'function') {
                      window.gtag('event', 'conversion', {'send_to': 'AW-18190526699/LvobCJSairUcEOvR9eFD'});
                    }
                  }} className="text-gold hover:text-white font-medium text-sm transition-colors flex items-center gap-1">
                    {t('book_now')} &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
