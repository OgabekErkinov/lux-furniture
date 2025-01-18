import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json'
import translationUz from './locales/uz/translation.json'
import translationRu from './locales/ru/translation.json'


i18n.use(initReactI18next)
.init({
    resources : {
        en : {translation : translationEn},
        uz : {translation : translationUz},
        ru : {translation : translationRu}
    },
    lng : 'en',
    fallbackLng : 'ru',
    interpolation : {
        escapeValue : false
    }
})

export default i18n
