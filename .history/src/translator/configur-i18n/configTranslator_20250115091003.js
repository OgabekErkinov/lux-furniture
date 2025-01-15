import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationUz from '../locales/uzb/translationUz.json';
import translationEn from '.';
import translationRu from './locales/ru/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEn },
        ru: { translation: translationRu },
        uz: { translation: translationUz }
    },
    lng: 'uz', 
    fallbackLng: 'uz', 
    interpolation: {
        escapeValue: false, 
    },
    returnObjects: true, 
});

export default i18n;