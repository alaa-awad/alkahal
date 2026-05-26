import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-dark-lighter pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold text-gold mb-6 flex items-center gap-2">
              الخال <span className="text-white text-sm bg-gold/20 px-2 py-1 rounded-md">VIP</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              {t('footer_desc')}
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/5 transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/5 transition-all">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/5 transition-all">
                <FaTwitter size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">{t('services')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">{t('vip_delivery')}</a></li>
               {            /* <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">{t('workers_delivery')}</a></li>*/}
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">{t('food_delivery')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">{t('animal_transport')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">{t('furniture_transport')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">{t('contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <span>دبي، الإمارات العربية المتحدة</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-gold shrink-0" size={20} />
                <span dir="ltr">+971 50 516 1988</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-gold shrink-0" size={20} />
                <span>alkhal@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>{t('all_rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
