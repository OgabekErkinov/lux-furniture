import i18n  from 'i18next'
import { initReactI18next } from 'react-i18next'
import Language
import translationEn from '../locales/eng/translationEn.json'
import translationRu from '../locales/rus/translationRu.json'
import translationUz from '../locales/uzb/translationUz.json'


i18n.use(Lan)use(initReactI18next).init({
    recourses : {
        en : {translation : translationEn},
        ru : {translation : translationRu},
        uz : {translation : translationUz}
    },

    lng : 'en',
    fallbackLng : 'en',
    interpolation : {
        escapevalue : false
    },
    returnObjects : true

})

export default i18n