import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      "home": "الرئيسية",
      "services": "خدماتنا",
      "features": "المميزات",
      "testimonials": "آراء العملاء",
      "contact": "تواصل معنا",
      "hero_title": "الخال لخدمات التوصيل",
      "hero_subtitle": "السرعة، الأمان، والفخامة في كل رحلة. الخيار الأول للتوصيل في الإمارات.",
      "book_now": "احجز الآن",
      "learn_more": "اكتشف المزيد",
      "our_services": "خدماتنا المتميزة",
      "vip_delivery": "توصيل VIP",
      "vip_desc": "سيارات فاخرة وخدمة راقية لتنقلاتك المهمة مع سائقين محترفين.",
      "workers_delivery": "توصيل الأثاث والطرود",
      "workers_desc": "طرود التجار والمعامل ونقل الأثاث.",
      "food_delivery": "توصيل الطعام",
      "food_desc": "توصيل سريع وآمن لوجباتك المفضلة مع الحفاظ على حرارتها وجودتها.",
      "animal_transport": "نقل وتوصيل الحيوانات",
      "animal_desc": "مركبات مجهزة خصيصاً لنقل حيواناتك الأليفة بكل أمان وعناية.",
      "furniture_transport": "توصيل الأثاث والطرود",
      "fast_service": "سرعة في الإنجاز",
      "safe_secure": "أمان وموثوقية",
      "support_24": "دعم على مدار الساعة",
      "stats_trips": "رحلة ناجحة",
      "stats_clients": "عميل سعيد",
      "stats_cities": "إمارات مغطاة",
      "footer_desc": "شركة الخال للتوصيل، الرائدة في خدمات النقل في الإمارات العربية المتحدة.",
      "all_rights": "جميع الحقوق محفوظة © الخال للتوصيل"
    }
  },
  en: {
    translation: {
      "home": "Home",
      "services": "Services",
      "features": "Features",
      "testimonials": "Testimonials",
      "contact": "Contact Us",
      "hero_title": "Al Khal Delivery Services",
      "hero_subtitle": "Speed, Safety, and Luxury in every journey. The first choice for delivery in the UAE.",
      "book_now": "Book Now",
      "learn_more": "Learn More",
      "our_services": "Our Premium Services",
      "vip_delivery": "VIP Delivery",
      "vip_desc": "Luxury cars and premium service for your important trips with professional drivers.",
      "workers_delivery": "Furniture & Parcels Delivery",
      "workers_desc": "Merchants and factory parcels, and furniture moving.",
      "food_delivery": "Food Delivery",
      "food_desc": "Fast and safe delivery for your favorite meals while maintaining their temperature and quality.",
      "animal_transport": "Animals Transport",
      "animal_desc": "Specially equipped vehicles to transport your pets safely and with care.",
      "furniture_transport": "Furniture and package delivery",
      "fast_service": "Fast Execution",
      "safe_secure": "Safe & Reliable",
      "support_24": "24/7 Support",
      "stats_trips": "Successful Trips",
      "stats_clients": "Happy Clients",
      "stats_cities": "Covered Emarites",
      "footer_desc": "Al Khal Delivery Company, the leader in transport services in the United Arab Emirates.",
      "all_rights": "All Rights Reserved © Al Khal Delivery"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
