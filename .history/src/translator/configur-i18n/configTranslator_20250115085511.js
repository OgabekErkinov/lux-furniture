import i18n  from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend';
import translationEn from '../locales/eng/translationEn.json'
import translationRu from '../locales/rus/translationRu.json'
import translationUz from '../locales/uzb/translationUz.json'


i18n
  .use(Backend) 
  .use(initReactI18next).init({
    
  })
    
  });

export default i18n