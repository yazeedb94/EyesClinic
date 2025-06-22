import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Clear Vision, Brighter Future',
    heroSubtitle: 'Comprehensive eye care services with state-of-the-art technology and compassionate care. From routine exams to advanced surgical procedures, we\'re here to protect your vision.',
    patientsServed: 'Patients Served',
    successRate: 'Success Rate',
    expertDoctors: 'Expert Doctors',
    scheduleAppointment: 'Schedule Appointment',
    ourServices: 'Our Services',
    locationText: 'The clinic is located in Irbid near the Sports City Roundabout',
    yearsExperience: '25+ Years of Excellence',
    
    // Services
    servicesTitle: 'Comprehensive Eye Care Solutions',
    servicesSubtitle: 'From routine check-ups to complex surgeries, we offer a full spectrum of eye care services using the latest technology and techniques.',
    
    comprehensiveExams: 'Comprehensive Eye Exams',
    comprehensiveExamsDesc: 'Complete vision and eye health evaluations using advanced diagnostic technology.',
    
    lasikSurgery: 'LASIK Surgery',
    lasikSurgeryDesc: 'Advanced laser vision correction for nearsightedness, farsightedness, and astigmatism.',
    
    cataractTreatment: 'Cataract Treatment',
    cataractTreatmentDesc: 'State-of-the-art cataract surgery with premium intraocular lens options.',
    
    pediatricCare: 'Pediatric Eye Care',
    pediatricCareDesc: 'Specialized eye care for children, from infancy through adolescence.',
    
    contactLens: 'Contact Lens Fitting',
    contactLensDesc: 'Expert fitting and consultation for all types of contact lenses.',
    
    medicalEyeCare: 'Medical Eye Care',
    medicalEyeCareDesc: 'Treatment for eye diseases including diabetic retinopathy and macular degeneration.',
    
    learnMore: 'Learn More',
    notSureService: 'Not Sure Which Service You Need?',
    consultationText: 'Our experienced team will help determine the best treatment plan for your unique needs.',
    scheduleConsultation: 'Schedule Consultation',
    
    // About
    aboutTitle: 'Excellence in Eye Care Since 1998',
    aboutSubtitle: 'We\'ve been the trusted choice for comprehensive eye care, combining cutting-edge technology with compassionate patient care to deliver exceptional results.',
    yearsExp: 'Years Experience',
    happyPatients: 'Happy Patients',
    patientRating: 'Patient Rating',
    
    commitmentTitle: 'Our Commitment to Your Vision',
    commitmentText1: 'Dar Al Oyoun Center – Dr. Adel Momani was established as a leading destination for advanced eye care, built upon extensive experience and distinguished academic and clinical excellence in the field of ophthalmology and eye surgery.',
    commitmentText2: 'The center is led by Dr. Adel Momani, Consultant Ophthalmologist and member of both the American Academy and the European Society of Ophthalmology, with many years of experience at Jordan University Hospital. The center includes a selection of specialized departments to provide comprehensive and integrated eye care services.',
    
    boardCertified: 'Board-certified ophthalmologists',
    sameDayAppointments: 'Same-day appointments available',
    latestTechnology: 'Latest FDA-approved technology',
    
    meetTeam: 'Meet Our Expert Team',
    teamSubtitle: 'Our board-certified ophthalmologists bring decades of combined experience and specialized training to provide you with exceptional care.',
    
    // Contact
    contactTitle: 'Schedule Your Appointment Today',
    contactSubtitle: 'Ready to take the next step in your eye health journey? Contact us to schedule a consultation with our expert team.',
    
    location: 'Location',
    phone: 'Phone',
    email: 'Email',
    hours: 'Hours',
    
    requestAppointment: 'Request an Appointment',
    fullName: 'Full Name',
    phoneNumber: 'Phone Number',
    emailAddress: 'Email Address',
    serviceNeeded: 'Service Needed',
    selectService: 'Select a service',
    additionalInfo: 'Additional Information',
    additionalInfoPlaceholder: 'Please describe any symptoms or specific concerns...',
    requiredFields: '* Required fields. We\'ll contact you within 24 hours to confirm your appointment.',
    
    thankYou: 'Thank You!',
    contactConfirmation: 'We\'ll contact you within 24 hours to confirm your appointment.',
    
    // Footer
    footerDescription: 'Delivering advanced eye care with expert hands and international standards, led by Dr. Adel Momani.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    hipaaNotice: 'HIPAA Notice',
    allRightsReserved: '© 2025 Dr. Adel Momani Eye Clinic. All rights reserved.',
    
    // Service Details
    backToServices: 'Back to Services',
    bookAppointment: 'Book Appointment',
    whyChooseUs: 'Why Choose Us?',
    whatToExpect: 'What to Expect',
    faq: 'Frequently Asked Questions',
    
    // Dark Mode
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode'
  },
  ar: {
    // Header
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    
    // Hero
    heroTitle: 'رؤية واضحة، مستقبل أكثر إشراقاً',
    heroSubtitle: 'خدمات شاملة لرعاية العيون بأحدث التقنيات والرعاية الرحيمة. من الفحوصات الروتينية إلى العمليات الجراحية المتقدمة، نحن هنا لحماية بصرك.',
    patientsServed: 'مريض تم علاجه',
    successRate: 'معدل النجاح',
    expertDoctors: 'طبيب خبير',
    scheduleAppointment: 'حجز موعد',
    ourServices: 'خدماتنا',
    locationText: 'تقع العيادة في اربد بالقرب من دوار المدينة الرياضية',
    yearsExperience: '25+ سنة من التميز',
    
    // Services
    servicesTitle: 'حلول شاملة لرعاية العيون',
    servicesSubtitle: 'من الفحوصات الروتينية إلى العمليات الجراحية المعقدة، نقدم مجموعة كاملة من خدمات رعاية العيون باستخدام أحدث التقنيات والأساليب.',
    
    comprehensiveExams: 'فحوصات شاملة للعيون',
    comprehensiveExamsDesc: 'تقييمات كاملة للرؤية وصحة العين باستخدام تقنيات التشخيص المتقدمة.',
    
    lasikSurgery: 'جراحة الليزك',
    lasikSurgeryDesc: 'تصحيح الرؤية بالليزر المتقدم لقصر النظر وطول النظر واللابؤرية.',
    
    cataractTreatment: 'علاج المياه البيضاء',
    cataractTreatmentDesc: 'جراحة المياه البيضاء الحديثة مع خيارات العدسات المتميزة.',
    
    pediatricCare: 'رعاية عيون الأطفال',
    pediatricCareDesc: 'رعاية متخصصة لعيون الأطفال من الرضاعة حتى المراهقة.',
    
    contactLens: 'تركيب العدسات اللاصقة',
    contactLensDesc: 'تركيب واستشارة خبيرة لجميع أنواع العدسات اللاصقة.',
    
    medicalEyeCare: 'الرعاية الطبية للعيون',
    medicalEyeCareDesc: 'علاج أمراض العيون بما في ذلك اعتلال الشبكية السكري والتنكس البقعي.',
    
    learnMore: 'اعرف المزيد',
    notSureService: 'غير متأكد من الخدمة التي تحتاجها؟',
    consultationText: 'فريقنا ذو الخبرة سيساعد في تحديد أفضل خطة علاج لاحتياجاتك الفريدة.',
    scheduleConsultation: 'حجز استشارة',
    
    // About
    aboutTitle: 'التميز في رعاية العيون منذ 1998',
    aboutSubtitle: 'لقد كنا الخيار الموثوق للرعاية الشاملة للعيون، حيث نجمع بين التكنولوجيا المتطورة والرعاية الرحيمة للمرضى لتقديم نتائج استثنائية.',
    yearsExp: 'سنة خبرة',
    happyPatients: 'مريض سعيد',
    patientRating: 'تقييم المرضى',
    
    commitmentTitle: 'التزامنا برؤيتك',
    commitmentText1: 'تأسس مركز دار العيون - الدكتور عادل المومني ليكون وجهة متقدمة في رعاية العيون، مستندًا إلى خبرة طويلة وتميّز علمي وعملي في مجال طب وجراحة العيون.',
    commitmentText2: 'يقود المركز الدكتور عادل المومني، استشاري طب وجراحة العيون، وعضو الأكاديمية الأمريكية والجمعية الأوروبية لطب وجراحة العيون، بخبرة امتدت لسنوات عديدة في مستشفى الجامعة الأردنية. يضم المركز نخبة من الأقسام المتخصصة لتقديم رعاية شاملة ومتكاملة،',
    
    boardCertified: 'أطباء عيون معتمدون',
    sameDayAppointments: 'مواعيد في نفس اليوم متاحة',
    latestTechnology: 'أحدث التقنيات المعتمدة من FDA',
    
    meetTeam: 'تعرف على فريقنا الخبير',
    teamSubtitle: 'يجلب أطباء العيون المعتمدون لدينا عقوداً من الخبرة المشتركة والتدريب المتخصص لتزويدك برعاية استثنائية.',
    
    // Contact
    contactTitle: 'احجز موعدك اليوم',
    contactSubtitle: 'مستعد لاتخاذ الخطوة التالية في رحلة صحة عينيك؟ اتصل بنا لحجز استشارة مع فريقنا الخبير.',
    
    location: 'الموقع',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    hours: 'ساعات العمل',
    
    requestAppointment: 'طلب موعد',
    fullName: 'الاسم الكامل',
    phoneNumber: 'رقم الهاتف',
    emailAddress: 'عنوان البريد الإلكتروني',
    serviceNeeded: 'الخدمة المطلوبة',
    selectService: 'اختر خدمة',
    additionalInfo: 'معلومات إضافية',
    additionalInfoPlaceholder: 'يرجى وصف أي أعراض أو مخاوف محددة...',
    requiredFields: '* الحقول المطلوبة. سنتصل بك خلال 24 ساعة لتأكيد موعدك.',
    
    thankYou: 'شكراً لك!',
    contactConfirmation: 'سنتصل بك خلال 24 ساعة لتأكيد موعدك.',
    
    // Footer
    footerDescription: 'نقدّم رعاية عيون متقدمة بقيادة الدكتور عادل المومني، بمعايير عالمية وخبرة متميزة.',
    quickLinks: 'روابط سريعة',
    contactInfo: 'معلومات الاتصال',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    hipaaNotice: 'إشعار HIPAA',
    allRightsReserved: '© 2025 عيادة د. عادل المومني للعيون. جميع الحقوق محفوظة.',
    
    // Service Details
    backToServices: 'العودة للخدمات',
    bookAppointment: 'حجز موعد',
    whyChooseUs: 'لماذا تختارنا؟',
    whatToExpect: 'ما يمكن توقعه',
    faq: 'الأسئلة الشائعة',
    
    // Dark Mode
    darkMode: 'الوضع المظلم',
    lightMode: 'الوضع المضيء'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};