import i18n  from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEn from '../locales/eng/translation.json'
import translationRu from '../locales/rus/translation.json'
import translationUz from '../locales/uzb/translation.json'


i18n.use(initReactI18next).init({
    resources : {
        en : {translation : translationEn},
        ru : {translation : translationRu},
        uz : {translation : translationUz}
    },

    lng : 'en',
    fallbackLng : 'en',
    interpolation : {
        escapeValue : false
    },
    returnObjects : true

})

export default i18n