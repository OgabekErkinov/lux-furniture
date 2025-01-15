import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from '../locales/eng/translationEn.json';
import translationRu from '../locales/rus/translationRu.json';
import translationUz from '../locales/uzb/translationUz.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEn },
      ru: { translation: translationRu },
      uz: { translation: translationUz },
    },
    lng: 'ru',
    fallbackLng: 'uz',
    interpolation: { escapeValue: false },
  });

export default i18n;
