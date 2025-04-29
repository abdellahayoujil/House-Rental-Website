export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang === 'fr' || lang === 'ar') return lang;
  return 'en';
}

export function useTranslations(lang: string) {
  return function t(key: string, vars = {}) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      if (value && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${lang}"`);
        return key;
      }
    }
    
    if (typeof value === 'string') {
      return replaceVariables(value, vars);
    }
    
    return key;
  };
}

function replaceVariables(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] || `{${key}}`);
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      houseInfo: 'House Info',
      location: 'Location',
      gallery: 'Gallery',
      contact: 'Contact'
    },
    hero: {
      title: 'Villa Serenity',
      subtitle: 'Experience luxury living in a beautiful villa with private swimming pool, perfect for your dream vacation.',
      bedrooms: '{count} Bedrooms',
      pool: 'Swimming Pool',
      price: 'From {price}',
      bookNow: 'Book Now',
      viewGallery: 'View Gallery'
    },
    houseInfo: {
      title: 'House Information',
      description: 'Villa Serenity is a luxurious 4-bedroom villa nestled in the picturesque coastal town of Biarritz, France. This modern retreat offers spacious living areas, a fully equipped gourmet kitchen, and stunning ocean views. Perfect for families or groups seeking a blend of comfort and elegance for their vacation.',
      size: 'Property Size',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      floors: 'Floors',
      price: 'Rental Price',
      night: 'night',
      priceNote: 'Minimum stay: 3 nights. Special weekly and monthly rates available.',
      amenities: 'Amenities',
      amenity1: 'Private swimming pool',
      amenity2: 'Fully equipped kitchen',
      amenity3: 'Outdoor dining area',
      amenity4: 'High-speed WiFi',
      amenity5: 'Air conditioning',
      amenity6: 'Smart TV with streaming',
      amenity7: 'Private garden',
      amenity8: 'Parking space'
    },
    location: {
      title: 'Location',
      address: 'Address',
      nearbyAttractions: 'Nearby Attractions',
      attraction1: 'Grande Plage Beach',
      attraction2: 'Biarritz Lighthouse',
      attraction3: 'Les Halles Market',
      attraction4: 'Rocher de la Vierge',
      attraction5: 'Cité de l\'Océan Museum',
      travelInfo: 'Travel Information',
      airport: 'Biarritz Airport',
      trainStation: 'Biarritz Train Station',
      highway: 'A63 Highway'
    },
    gallery: {
      title: 'Gallery',
      description: 'Explore our beautiful villa through these high-quality images. Click on any photo to view in full size.',
      exterior: 'Villa Exterior',
      exteriorCaption: 'Front view of Villa Serenity',
      livingRoom: 'Living Room',
      livingRoomCaption: 'Spacious and comfortable living area',
      bedroom: 'Master Bedroom',
      bedroomCaption: 'Luxurious master bedroom with ocean views',
      kitchen: 'Kitchen',
      kitchenCaption: 'Modern, fully equipped kitchen',
      bathroom: 'Bathroom',
      bathroomCaption: 'Elegant bathroom with shower and bathtub',
      pool: 'Swimming Pool',
      poolCaption: 'Private pool with lounge area'
    },
    contact: {
      title: 'Contact Us',
      phone: 'Phone',
      email: 'Email',
      availability: 'Availability',
      availabilityHours: 'Available 7 days a week, 9 AM - 8 PM',
      bookingInfo: 'Booking Information',
      bookingDescription: 'To make a reservation, please follow these steps:',
      bookingStep1: 'Fill out the inquiry form with your desired dates',
      bookingStep2: 'We\'ll check availability and contact you within 24 hours',
      bookingStep3: 'Secure your booking with a 30% deposit',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        checkin: 'Check-in Date',
        checkout: 'Check-out Date',
        guests: 'Number of Guests',
        message: 'Additional Information',
        submit: 'Send Inquiry'
      }
    },
    footer: {
      tagline: 'Luxury villa rental in Biarritz, France',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      rights: 'All rights reserved',
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      houseInfo: 'La Maison',
      location: 'Emplacement',
      gallery: 'Galerie',
      contact: 'Contact'
    },
    hero: {
      title: 'Villa Sérénité',
      subtitle: 'Découvrez un séjour luxueux dans une belle villa avec piscine privée, parfaite pour vos vacances de rêve.',
      bedrooms: '{count} Chambres',
      pool: 'Piscine Privée',
      price: 'À partir de {price}',
      bookNow: 'Réserver',
      viewGallery: 'Voir la Galerie'
    },
    houseInfo: {
      title: 'Informations sur la Maison',
      description: 'Villa Sérénité est une luxueuse villa de 4 chambres nichée dans la pittoresque ville côtière de Biarritz, France. Cette retraite moderne offre des espaces de vie spacieux, une cuisine gastronomique entièrement équipée et une vue imprenable sur l\'océan. Parfait pour les familles ou les groupes recherchant un mélange de confort et d\'élégance pour leurs vacances.',
      size: 'Superficie',
      bedrooms: 'Chambres',
      bathrooms: 'Salles de Bain',
      floors: 'Étages',
      price: 'Prix de Location',
      night: 'nuit',
      priceNote: 'Séjour minimum: 3 nuits. Tarifs spéciaux hebdomadaires et mensuels disponibles.',
      amenities: 'Équipements',
      amenity1: 'Piscine privée',
      amenity2: 'Cuisine entièrement équipée',
      amenity3: 'Espace repas extérieur',
      amenity4: 'WiFi haut débit',
      amenity5: 'Climatisation',
      amenity6: 'TV intelligente avec streaming',
      amenity7: 'Jardin privé',
      amenity8: 'Place de parking'
    },
    location: {
      title: 'Emplacement',
      address: 'Adresse',
      nearbyAttractions: 'Attractions à Proximité',
      attraction1: 'Plage de la Grande Plage',
      attraction2: 'Phare de Biarritz',
      attraction3: 'Marché Les Halles',
      attraction4: 'Rocher de la Vierge',
      attraction5: 'Cité de l\'Océan',
      travelInfo: 'Informations de Voyage',
      airport: 'Aéroport de Biarritz',
      trainStation: 'Gare de Biarritz',
      highway: 'Autoroute A63'
    },
    gallery: {
      title: 'Galerie',
      description: 'Explorez notre belle villa à travers ces images de haute qualité. Cliquez sur n\'importe quelle photo pour la voir en taille réelle.',
      exterior: 'Extérieur de la Villa',
      exteriorCaption: 'Vue frontale de Villa Sérénité',
      livingRoom: 'Salon',
      livingRoomCaption: 'Espace de vie spacieux et confortable',
      bedroom: 'Chambre Principale',
      bedroomCaption: 'Chambre principale luxueuse avec vue sur l\'océan',
      kitchen: 'Cuisine',
      kitchenCaption: 'Cuisine moderne entièrement équipée',
      bathroom: 'Salle de Bain',
      bathroomCaption: 'Salle de bain élégante avec douche et baignoire',
      pool: 'Piscine',
      poolCaption: 'Piscine privée avec espace détente'
    },
    contact: {
      title: 'Contactez-Nous',
      phone: 'Téléphone',
      email: 'Email',
      availability: 'Disponibilité',
      availabilityHours: 'Disponible 7 jours sur 7, de 9h à 20h',
      bookingInfo: 'Informations de Réservation',
      bookingDescription: 'Pour effectuer une réservation, veuillez suivre ces étapes:',
      bookingStep1: 'Remplissez le formulaire de demande avec vos dates souhaitées',
      bookingStep2: 'Nous vérifierons la disponibilité et vous contacterons dans les 24 heures',
      bookingStep3: 'Sécurisez votre réservation avec un acompte de 30%',
      form: {
        name: 'Votre Nom',
        email: 'Adresse Email',
        checkin: 'Date d\'Arrivée',
        checkout: 'Date de Départ',
        guests: 'Nombre de Personnes',
        message: 'Informations Complémentaires',
        submit: 'Envoyer la Demande'
      }
    },
    footer: {
      tagline: 'Location de villa de luxe à Biarritz, France',
      quickLinks: 'Liens Rapides',
      contactInfo: 'Informations de Contact',
      rights: 'Tous droits réservés',
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      houseInfo: 'معلومات المنزل',
      location: 'الموقع',
      gallery: 'معرض الصور',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'فيلا سيرينيتي',
      subtitle: 'استمتع بإقامة فاخرة في فيلا جميلة مع حمام سباحة خاص، مثالية لقضاء عطلة أحلامك.',
      bedrooms: '{count} غرف نوم',
      pool: 'حمام سباحة',
      price: 'من {price}',
      bookNow: 'احجز الآن',
      viewGallery: 'عرض الصور'
    },
    houseInfo: {
      title: 'معلومات المنزل',
      description: 'فيلا سيرينيتي هي فيلا فاخرة تتكون من 4 غرف نوم تقع في مدينة بياريتز الساحلية الخلابة في فرنسا. توفر هذه الفيلا العصرية مساحات معيشة واسعة ومطبخًا مجهزًا بالكامل وإطلالات خلابة على المحيط. مثالية للعائلات أو المجموعات الباحثة عن مزيج من الراحة والأناقة لقضاء إجازتهم.',
      size: 'مساحة العقار',
      bedrooms: 'غرف النوم',
      bathrooms: 'الحمامات',
      floors: 'الطوابق',
      price: 'سعر الإيجار',
      night: 'الليلة',
      priceNote: 'الحد الأدنى للإقامة: 3 ليالي. تتوفر أسعار خاصة أسبوعية وشهرية.',
      amenities: 'المرافق',
      amenity1: 'حمام سباحة خاص',
      amenity2: 'مطبخ مجهز بالكامل',
      amenity3: 'منطقة طعام خارجية',
      amenity4: 'واي فاي عالي السرعة',
      amenity5: 'تكييف هواء',
      amenity6: 'تلفزيون ذكي مع بث',
      amenity7: 'حديقة خاصة',
      amenity8: 'موقف سيارات'
    },
    location: {
      title: 'الموقع',
      address: 'العنوان',
      nearbyAttractions: 'معالم الجذب القريبة',
      attraction1: 'شاطئ غراند بلاج',
      attraction2: 'منارة بياريتز',
      attraction3: 'سوق لي هال',
      attraction4: 'روشيه دو لا فييرج',
      attraction5: 'متحف سيتي دو لوسيان',
      travelInfo: 'معلومات السفر',
      airport: 'مطار بياريتز',
      trainStation: 'محطة قطار بياريتز',
      highway: 'طريق A63 السريع'
    },
    gallery: {
      title: 'معرض الصور',
      description: 'استكشف فيلتنا الجميلة من خلال هذه الصور عالية الجودة. انقر على أي صورة لعرضها بالحجم الكامل.',
      exterior: 'خارج الفيلا',
      exteriorCaption: 'منظر أمامي لفيلا سيرينيتي',
      livingRoom: 'غرفة المعيشة',
      livingRoomCaption: 'مساحة معيشة واسعة ومريحة',
      bedroom: 'غرفة النوم الرئيسية',
      bedroomCaption: 'غرفة نوم رئيسية فاخرة مع إطلالات على المحيط',
      kitchen: 'المطبخ',
      kitchenCaption: 'مطبخ حديث مجهز بالكامل',
      bathroom: 'الحمام',
      bathroomCaption: 'حمام أنيق مع دش وحوض استحمام',
      pool: 'حمام السباحة',
      poolCaption: 'حمام سباحة خاص مع منطقة استراحة'
    },
    contact: {
      title: 'اتصل بنا',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      availability: 'الإتاحة',
      availabilityHours: 'متاح 7 أيام في الأسبوع، من 9 صباحًا حتى 8 مساءً',
      bookingInfo: 'معلومات الحجز',
      bookingDescription: 'لإجراء حجز، يرجى اتباع هذه الخطوات:',
      bookingStep1: 'املأ نموذج الاستفسار مع التواريخ المرغوبة',
      bookingStep2: 'سنتحقق من التوفر ونتصل بك خلال 24 ساعة',
      bookingStep3: 'أمّن حجزك بدفعة أولية بنسبة 30٪',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        checkin: 'تاريخ الوصول',
        checkout: 'تاريخ المغادرة',
        guests: 'عدد الضيوف',
        message: 'معلومات إضافية',
        submit: 'إرسال الاستفسار'
      }
    },
    footer: {
      tagline: 'تأجير فيلا فاخرة في بياريتز، فرنسا',
      quickLinks: 'روابط سريعة',
      contactInfo: 'معلومات الاتصال',
      rights: 'جميع الحقوق محفوظة',
    }
  }
};